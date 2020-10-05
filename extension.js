({
    name: "Firebase Realtime Database", // Category Name
    description: "Get Set and Push data to Firebase Realtime Database",
    author: "microBlock",
    category: "Communication",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#3498DB", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml: `
                <block type="firebase_config">
                    <value name="databaseURL">
                        <shadow type="text">
                            <field name="TEXT">--Firebase-URL--</field>
                        </shadow>
                    </value>
                    <value name="token">
                        <shadow type="text">
                            <field name="TEXT">--Firebase-Token--</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="firebase_get">
                    <value name="path">
                        <shadow type="text">
                            <field name="TEXT">/</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="firebase_set">
                    <value name="path">
                        <shadow type="text">
                            <field name="TEXT">/</field>
                        </shadow>
                    </value>
                    <value name="data">
                        <shadow type="text">
                            <field name="TEXT">Hello!</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="firebase_push">
                    <value name="path">
                        <shadow type="text">
                            <field name="TEXT">/</field>
                        </shadow>
                    </value>
                    <value name="data">
                        <shadow type="math_number">
                            <field name="NUM">123</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="firebase_delete">
                    <value name="path">
                        <shadow type="text">
                            <field name="TEXT">/</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
