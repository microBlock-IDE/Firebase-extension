import usocket
import ujson
import ussl

_host = ""
_token = ""

def config(url, token):
    global _host, _token
    try:
        dummy1, dummy2, host, dummy3 = url.split("/", 3)
    except ValueError:
        dummy1, dummy2, host = url.split("/", 2)
    _host = host
    _token = token

def _req(method = "GET", path = "/", data = None):
    if data != None:
        data = ujson.dumps(data)
    s = usocket.socket()

    ai = usocket.getaddrinfo(_host, 443)
    s.connect(ai[0][-1])
    s = ussl.wrap_socket(s, server_hostname=_host)

    s.write(b"{} {}.json?auth={} HTTP/1.1\r\n".format(method, path, _token))
    s.write(b"Host: {}\r\n".format(_host))
    s.write(b"Content-Type: application/json\r\n")
    if data != None:
        s.write(b"Content-Length: {}\r\n".format(len(data)))
    s.write(b"Connection: close\r\n")
    s.write(b"\r\n")
    if data:
        s.write(data)
    ros = s.read()
    print(ros)
    s.close()
    return ros

def get(path):
    ros = _req("GET", path)
    dataStart = ros.index(b"\r\n\r\n")
    data = ros[dataStart + 4:] if dataStart >= 0 else None
    return ujson.loads(data)

def set(path, data):
    _req("PUT", path, data)

def push(path, data):
    _req("POST", path, data)

def delete(path):
    _req("DELETE", path)
