<s-input>
    <input type="text" class="form-control" id="{ refid }" value="{ value }" ref="input">

    <script type="text/javascript">
        this.value = opts.value ? opts.value : '';
        this.refid = opts.refid ? opts.refid : '';

        this.syncValue = (evt) => {
            this.value = this.refs.input.value;

            this.trigger('value', this.value);
        }

    </script> 

</s-input>