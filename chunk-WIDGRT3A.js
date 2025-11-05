import{a as P}from"./chunk-SHVRNWV6.js";import{b as _}from"./chunk-FS7NDJDZ.js";import{a as p}from"./chunk-B6REBDYA.js";import{n as m}from"./chunk-AA2HZO7A.js";import{B as y,Ta as u,k as d,n as h}from"./chunk-5NSQI72W.js";import{j as l}from"./chunk-G6LNOBMT.js";var w=(()=>{class r{_triplestore=h(P);_service=h(m);_file=h(_);sample=y(`id,path
ff2d4ca5-4767-53fb-b580-7fecfe4f2857,F3-RHTU/Dokumentendossier/h_Entw\xE4sserungskonzept/RTBS_AP_Sit_Entw_BL.dxf
fdc66621-5e20-5ee7-bd3d-492011727c30,F3-RHTU/Dokumentendossier/h_Entw\xE4sserungskonzept/RTBS_AP_Sit_Entw_EZG_BL.dxf
fc99bf44-3c43-5cfd-a07f-896c35953b66,F3-RHTU/Dokumentendossier/g_Technische_Berichte/g4_Koordination St\xE4dtebau und Landschaft_Plan Basel-Stadt/g4_RTBS_AP_KooPl_xx_Basel-Stadt_230830.pdf
`);onProjectChange=u(()=>{this._service.projectId()&&this._buildSample()});handleBuild(e,t=!0,o=!0){return l(this,null,function*(){let s=e.dryRun??!1?Object.keys(e.idMap).slice(0,5):Object.keys(e.idMap),n=yield this._getRemoteFilePaths(s,e.identifierType),i=s.map(a=>({remotePath:n[a],zipPath:e.idMap[a]}));t?this._file.streamDownloadFilesZip("raw",i,"bundle.zip",a=>{}):yield this._file.downloadFilesZip("raw",i,"bundle.zip",!0)})}_getRemoteFilePaths(e,t){return l(this,null,function*(){let o=`${this._service.config()?.rdfBase}${this._service.projectId()}/`,c=`PREFIX qcy: <${p.qcy}>
    SELECT ?key ?filePath WHERE {
      VALUES ?key { ${e.map(i=>`"${i}"`).join(" ")} }
      ${t==="content UUID"?`BIND(IRI(CONCAT("${o}", ?key)) AS ?iri) ?iri qcy:hasFileLocation/qcy:remoteRelativePath ?filePath .`:""}
      ${t==="original file path"?"?loc qcy:hasFileLocation ?key ; qcy:remoteRelativePath ?filePath .":""}
      ${t==="location UUID"?`BIND(IRI(CONCAT("${o}", ?key)) AS ?iri) ?iri qcy:remoteRelativePath ?filePath .`:""}
      ${t==="MD5"?"?con qcy:md5Hash ?key ; qcy:hasFileLocation/qcy:remoteRelativePath ?filePath .":""}
    }`,s=yield this._triplestore.query(c),n={};return s.results.bindings.forEach(i=>{let a=i.key.value,f=i.filePath.value;n[a]=f}),n})}_buildSample(){return l(this,null,function*(){let e=`PREFIX qcy: <${p.qcy}>
        SELECT ?iri ?originalPath
        WHERE {
          ?iri a qcy:FileContent ;
            qcy:hasFileLocation/qcy:filePath ?originalPath 
        } LIMIT 10`,t=yield this._triplestore.query(e),o=`id,originalPath,newPath
`;t.results.bindings.forEach((c,s)=>{let n=c.iri.value.split("/").pop(),i=c.originalPath.value,a=i.split(".").pop()??"",f=`new_name_${s+1}.${a}`;o+=`"${n}","${i}","${f}"
`}),this.sample.set(o)})}static \u0275fac=function(t){return new(t||r)};static \u0275prov=d({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})();export{w as a};
