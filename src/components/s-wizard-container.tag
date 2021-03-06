<s-wizard-containter>
    <s-input title="Dog" value="hello">
    this.on('before-mount', function() {
        // before the tag is mounted
    })

    this.on('mount', function() {
        // right after the tag is mounted on the page
    })

    this.on('update', function() {
        // allows recalculation of context data before the update
    })

    this.on('updated', function() {
        // right after the tag template is updated after an update call
    })

    this.on('before-unmount', function() {
        // before the tag is removed
    })

    this.on('unmount', function() {
        // when the tag is removed from the page
    })

    // curious about all events ?
    this.on('*', function(eventName) {
        console.info(eventName)
    })
</s-wizard-containter>