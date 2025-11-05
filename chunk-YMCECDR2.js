import{a as E}from"./chunk-SHVRNWV6.js";import{a as o}from"./chunk-B6REBDYA.js";import"./chunk-AA2HZO7A.js";import"./chunk-6SZWXIRU.js";import{F as y,Kc as C,O as s,Td as q,W as l,ea as p,fa as m,ga as u,n as c}from"./chunk-5NSQI72W.js";import"./chunk-YTOZE3DU.js";import{j as i}from"./chunk-G6LNOBMT.js";var T=(()=>{class n{_triplestore=c(E);sampleQueries=[{label:"List files",query:`PREFIX qcy: <${o.qcy}>

SELECT ?content ?mimeCategory ?contentCategory (GROUP_CONCAT(?path) AS ?filePaths)
WHERE{
  ?content a qcy:FileContent ;
    qcy:hasMimeCategory ?mimeCategory ;
    qcy:hasContentCategory ?contentCategory ;
    qcy:hasFileLocation ?location .
  ?location qcy:filePath ?path
}
GROUP BY ?content ?mimeCategory ?contentCategory`},{label:"Entity count",query:`PREFIX qcy: <${o.qcy}>
PREFIX qcy-e: <${o["qcy-e"]}>

SELECT ?category (COUNT(?entity) AS ?count)
WHERE{
  ?entity a qcy:EntityMention ;
    qcy:hasEntityCategory ?category
}
GROUP BY ?category
ORDER BY DESC(?count)`}];handlers={queryHandler:(r,e,t)=>i(this,null,function*(){let a=e.queryType;return(a==="CONSTRUCT"||a==="DESCRIBE")&&(t="application/ld+json"),this._triplestore.query(r,t)})};static \u0275fac=function(e){return new(e||n)};static \u0275cmp=s({type:n,selectors:[["lib-query"]],decls:2,vars:2,consts:[[3,"handlers","sampleQueries"]],template:function(e,t){e&1&&(p(0,"cue-app-wrap"),u(1,"cue-query-view",0),m()),e&2&&(y(),l("handlers",t.handlers)("sampleQueries",t.sampleQueries))},dependencies:[q,C],encapsulation:2,changeDetection:0})}return n})();export{T as QueryComponent};
