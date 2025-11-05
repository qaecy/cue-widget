import{$ as m,B as r,F as d,Gc as C,Gd as q,Hd as v,Kd as D,Ld as T,N as c,O as l,R as p,Rd as E,Ta as g,W as h,ea as u,fa as y,ga as f,y as i}from"./chunk-5NSQI72W.js";import{j as s}from"./chunk-G6LNOBMT.js";function x(e,G){e&1&&f(0,"cue-rdf-graph",1),e&2&&h("doc",G)}var N=(()=>{class e{data=c.required();handlers=c();documentGraphHasContent=i();doc=r(void 0);onData=g(()=>s(this,null,function*(){let n=this.data();this._buildContentGraph(n.contentIRI)}));ngOnDestroy(){this.doc.set(void 0)}_buildContentGraph(n){return s(this,null,function*(){let t=this.handlers()?.queryHandler;if(!t){console.warn("No query handler defined, cannot build content graph");return}let o=`PREFIX skos: <${T.skos}>
PREFIX qcy: <${D.qcy}>
CONSTRUCT {
  ?res qcy:value ?val ;
       qcy:hasEntityCategory ?cat .
  ?cat skos:prefLabel ?label .
  ?res ?p ?res2
}
WHERE {
  BIND(<${n}> AS ?c)
  ?c qcy:mentions ?m .
  ?m qcy:resolvesTo ?res .
  ?res qcy:value ?val ; 
       qcy:hasEntityCategory ?cat .
  BIND(STRAFTER(STR(?cat), "#") as ?label)
  OPTIONAL{
    ?m ?p ?m2 .
    ?m2 qcy:resolvesTo ?res2
    FILTER(?p NOT IN (qcy:resolvesTo, qcy:mentions, qcy:relatedEntity)) 
  }
}`,a=yield t(o,q(o),"application/ld+json"),R=v(a);this.documentGraphHasContent.emit(!R),this.doc.update(()=>a)})}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["cue-block-document-graph"]],inputs:{data:[1,"data"],handlers:[1,"handlers"]},outputs:{data:"dataChange",handlers:"handlersChange",documentGraphHasContent:"documentGraphHasContent"},decls:2,vars:1,consts:[["direction","column","justify","center","align","center",1,"container"],[3,"doc"]],template:function(t,o){if(t&1&&(u(0,"cue-flexcontainer",0),p(1,x,1,1,"cue-rdf-graph",1),y()),t&2){let a;d(),m((a=o.doc())?1:-1,a)}},dependencies:[E,C],styles:["[_nghost-%COMP%]{display:contents}.container[_ngcontent-%COMP%]{flex:1 1;width:100%;height:100%;min-height:400px;margin-bottom:30px;overflow-y:auto;text-align:left;position:relative}"],changeDetection:0})}return e})();export{N as a};
