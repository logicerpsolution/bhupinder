montageDefine("643d000","deserialization/deserializer",{dependencies:["q","./interpreter"],factory:function(e,t){(function(t){function n(e){this._serializationString=e}function r(e){return new n(e).deserializeObject()}var i=e("q"),a=e("./interpreter").Interpreter;Object.defineProperties(n.prototype,{_interpreter:{value:new a},_serializationString:{value:null,writable:!0},deserialize:{value:function(e){var t;try{t=JSON.parse(this._serializationString)}catch(n){return i.reject(n)}return this._interpreter.instantiate(t,e)}},deserializeObject:{value:function(e){return this.deserialize(e).then(function(e){return e.root})}}}),t.Deserializer=n,t.deserialize=r})(t)}});