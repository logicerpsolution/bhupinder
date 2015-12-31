"use strict";function FastMap(e,t,n,i){return this instanceof FastMap?(t=t||Object.equals,n=n||Object.hash,i=i||Function.noop,this.contentEquals=t,this.contentHash=n,this.getDefault=i,this.store=new Set(void 0,function(e,n){return t(e.key,n.key)},function(e){return n(e.key)}),this.length=0,this.addEach(e),void 0):new FastMap(e,t,n,i)}var Shim=require("./shim"),Set=require("./fast-set"),GenericCollection=require("./generic-collection"),GenericMap=require("./generic-map"),PropertyChanges=require("./listen/property-changes");module.exports=FastMap,FastMap.FastMap=FastMap,Object.addEach(FastMap.prototype,GenericCollection.prototype),Object.addEach(FastMap.prototype,GenericMap.prototype),Object.addEach(FastMap.prototype,PropertyChanges.prototype),FastMap.prototype.constructClone=function(e){return new this.constructor(e,this.contentEquals,this.contentHash,this.getDefault)},FastMap.prototype.log=function(e,t){t=t||this.stringify,this.store.log(e,t)},FastMap.prototype.stringify=function(e,t){return t+JSON.stringify(e.key)+": "+JSON.stringify(e.value)};