import{Jd as n,Kd as o}from"./chunk-5NSQI72W.js";import{a,b as c}from"./chunk-G6LNOBMT.js";var r=`PREFIX qcy: <${o.qcy}>
PREFIX qcy-e: <${o["qcy-e"]}>`,C=y=>y===`${o["qcy-e"]}ContractualDocument`?u():{shown:[],hidden:[]},v=y=>y===`${o["qcy-e"]}ContractualDocument`,u=()=>{let y=[c(a({},new n("label","Label")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract ;
                    qcy:value ?val .
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""}),c(a({},new n("fileName","File name")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract .
                ?key qcy:hasFileLocation/qcy:filePath ?val
            }`,formatter:e=>{let t=e!==void 0?e[0].val??"":"";return t.split("/").pop()??t}}),c(a({},new n("summary","Summary")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract .
                ?key qcy:textSummary ?val
            }`,formatter:e=>{let t=e!==void 0?e[0].val??"":"";return t.split("/").pop()??t}}),c(a({},new n("subject","Subject")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasProperty ?property .
                ?property a qcy:Property ;
                  qcy:label "contractSubject" ;
                  qcy:value ?val .
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""}),c(a({},new n("parties","Parties")),{query:`${r}
            SELECT ?key ?partyName ?roleLabel
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:contractInvolvesParty ?party .
                ?party qcy:value ?partyName ;
                  qcy:hasEntityCategory ?partyCategory .
                OPTIONAL{
                ?role qcy:hasEntityCategory qcy-e:ContractRole ;
                  qcy:roleInContract ?contract ;
                  qcy:value ?roleLabel .
                ?party qcy:hasContractRole ?role .
            }
            }`,formatter:e=>e===void 0?"":e.map(t=>{let E=t.partyName,l=t.partyCategory,q=t.roleLabel,i=E;return l!==void 0&&(i+=` (${l})`),q!==void 0&&(i+=` [${q}]`),i}).join(", ")})],s=[c(a({},new n("signDate","Date Signed")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract ;
                    qcy:contractHasSignatureDate/qcy:value ?val
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""}),c(a({},new n("startDate","Effective from")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract ;
                    qcy:contractHasStartDate/qcy:value ?val
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""}),c(a({},new n("endDate","Terminated at")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract ;
                    qcy:contractHasEndDate/qcy:value ?val
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""}),c(a({},new n("jurisdiction","Jurisdiction")),{query:`${r}
            SELECT ?key ?val
            WHERE {
                ?key qcy:mentions ?contract .
                ?contract qcy:hasEntityCategory qcy-e:Contract ;
                    qcy:contractGovernedByJurisdiction/qcy:value ?val
            }`,formatter:e=>e?.map(t=>t.val).join(", ")??""})];return{shown:y,hidden:s}};export{C as a,v as b};
