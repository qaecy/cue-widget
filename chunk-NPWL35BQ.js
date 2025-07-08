import{a as o,c as q}from"./chunk-76IX7N3P.js";import"./chunk-ABTBFHZA.js";import{Ca as s,Ka as l,La as p,Ma as m,Q as i,_b as u,ia as c,sa as y,xc as C}from"./chunk-CZJXYZ2U.js";import{h as a}from"./chunk-XYUF6GX4.js";var S=(()=>{class t{_triplestore=i(q);sampleQueries=[{label:"List files",query:`PREFIX qcy: <${o.qcy}>

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
ORDER BY DESC(?count)`}];handlers={queryHandler:(r,e,n)=>a(this,null,function*(){return this._triplestore.query(r,n)})};static \u0275fac=function(e){return new(e||t)};static \u0275cmp=y({type:t,selectors:[["lib-query"]],decls:2,vars:2,consts:[[3,"handlers","sampleQueries"]],template:function(e,n){e&1&&(l(0,"cue-app-wrap"),m(1,"cue-query-view",0),p()),e&2&&(c(),s("handlers",n.handlers)("sampleQueries",n.sampleQueries))},dependencies:[C,u],encapsulation:2,changeDetection:0})}return t})();export{S as QueryComponent};
