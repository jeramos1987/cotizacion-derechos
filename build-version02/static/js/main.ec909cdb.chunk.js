(this["webpackJsonpcotizacion-derechos"]=this["webpackJsonpcotizacion-derechos"]||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(16),n=s.n(a),l=(s(22),s(8)),i=s(3),r=s(2),d=s(0),j=function(){return Object(d.jsxs)("div",{className:"card is-justify-content-center is-align-items-center has-text-centered mt-2 message is-success",children:[Object(d.jsx)("h2",{className:"title m-2",children:"Solicitar Cotizaci\xf3n"}),Object(d.jsxs)("p",{className:"m-2",children:["Si desea una ",Object(d.jsx)("strong",{children:"Cotizaci\xf3n Aduanera"})," comuniquese con nuestro ejecutivo comercial al siguiente email."]}),Object(d.jsx)("p",{className:"m-2 has-text-link",children:"ventas.aduanas@outlook.com"}),Object(d.jsx)("a",{href:"mailto:ventas.aduanas@outlook.com?subject=SOLICITO%20COTIZACION&body=Estimados%2C%0A%0ASolicito%20cotizaci%C3%B3n%20para%20los%20siguientes%20servicios.%0A%0A-%20Agenciamiento%20de%20aduana%0A-%20Agenciamiento%20de%20carga%0A-%20Transporte%0A-%20Seguro%20internacional%0A%0AEnviarme%20listado%20de%20la%20informaci%C3%B3n%20que%20necesitan.%0A%0ASomos.%0A%0A-%20Empresa%3A%0A-%20Ruc%3A%0A-%20Contacto%3A%0A%0AQuedo%20a%20la%20espera%20de%20su%20pronta%20respuesta.",className:"button is-success m-2",children:"Enviar un Email"})]})},o=function(e){var t=e.tc,s=Object(c.useState)(0),a=Object(r.a)(s,2),n=a[0],l=a[1],i=Object(c.useState)(0),j=Object(r.a)(i,2),o=j[0],b=j[1],h=Object(c.useState)(0),x=Object(r.a)(h,2),O=x[0],u=x[1],m=Object(c.useState)(0),p=Object(r.a)(m,2),v=p[0],N=p[1],f=Object(c.useState)(0),g=Object(r.a)(f,2),S=g[0],A=g[1],I=Object(c.useState)(0),C=Object(r.a)(I,2),F=C[0],y=C[1],w=Object(c.useState)(0),D=Object(r.a)(w,2),T=D[0],U=D[1],k=Object(c.useState)(0),M=Object(r.a)(k,2),P=M[0],q=M[1],E=Object(c.useState)(0),$=Object(r.a)(E,2),z=$[0],B=$[1],G=Object(c.useState)(0),L=Object(r.a)(G,2),V=L[0],R=L[1],J=Object(c.useState)(0),Q=Object(r.a)(J,2),Z=Q[0],_=Q[1],H=Object(c.useState)(0),K=Object(r.a)(H,2),W=K[0],X=K[1],Y=Object(c.useState)(0),ee=Object(r.a)(Y,2),te=ee[0],se=ee[1],ce=Object(c.useState)(0),ae=Object(r.a)(ce,2),ne=ae[0],le=ae[1],ie=Object(c.useState)(0),re=Object(r.a)(ie,2),de=re[0],je=re[1],oe=Object(c.useState)(0),be=Object(r.a)(oe,2),he=be[0],xe=be[1],Oe=Object(c.useState)(0),ue=Object(r.a)(Oe,2),me=ue[0],pe=ue[1],ve=[{id:"adv",nombre:"Ad Valorem",valorPen:o,valorUsd:n},{id:"igv",nombre:"IGV",valorPen:v,valorUsd:O},{id:"ipm",nombre:"IPM",valorPen:F,valorUsd:S},{id:"isc",nombre:"ISC",valorPen:P,valorUsd:T},{id:"antid",nombre:"Anti dumping",valorPen:V,valorUsd:z}],Ne=function(e){switch(e.target.id){case"adv":l(parseInt(e.target.value));break;case"igv":u(parseInt(e.target.value));break;case"ipm":A(parseInt(e.target.value));break;case"isc":U(parseInt(e.target.value));break;case"diasInteres":se(parseInt(e.target.value));break;case"percepcion":xe(parseInt(e.target.value));break;default:B(parseInt(e.target.value))}};Object(c.useEffect)((function(){_(n+O+S+T+z),le(.005/30*Z*te),b(n*t),N(O*t),y(S*t),q(T*t),R(z*t),X(Z*t),je(Math.round(Math.round(ne)*t)),pe(Math.round(W)+de+he),console.log("Interes Soles: ",de)}));return Object(d.jsxs)("div",{children:[Object(d.jsxs)("table",{className:"table is-hoverable is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Concepto"}),Object(d.jsx)("th",{children:"Importe USD"}),Object(d.jsx)("th",{children:"Importe SOL"})]})}),Object(d.jsx)("tbody",{children:ve.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.nombre}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{class:"field",children:Object(d.jsxs)("p",{class:"control has-icons-left",children:[Object(d.jsx)("input",{className:"input is-focused is-small has-text-right",type:"number",name:"advUsd",id:e.id,value:e.valorUsd,onChange:Ne}),Object(d.jsx)("span",{class:"icon is-small is-left",children:Object(d.jsx)("i",{children:"$"})})]})})}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{class:"field",children:Object(d.jsxs)("p",{class:"control has-icons-left",children:[Object(d.jsx)("input",{className:"input is-focused is-small has-text-right",value:parseInt(e.valorPen),disabled:!0}),Object(d.jsx)("span",{class:"icon is-small is-left",children:Object(d.jsx)("i",{children:"S/"})})]})})})]},e.id)}))}),Object(d.jsxs)("tfoot",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Derechos"}),Object(d.jsx)("th",{className:"has-text-right",children:Object(d.jsxs)("span",{children:["$",Z]})}),Object(d.jsx)("th",{className:"has-text-right",children:"S/".concat(parseInt(W))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Intereses"}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{class:"field",children:Object(d.jsxs)("p",{class:"control has-icons-left",children:[Object(d.jsx)("input",{className:"input is-focused is-small has-text-right",type:"number",name:"diasInteres",id:"diasInteres",value:te,onChange:Ne}),Object(d.jsx)("span",{class:"icon is-small is-left",children:Object(d.jsx)("i",{children:"Dias"})})]})})}),Object(d.jsx)("td",{className:"has-text-right",children:Object(d.jsx)("span",{children:"S/".concat(parseInt(de))})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Percepcion"}),Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:Object(d.jsx)("div",{class:"field",children:Object(d.jsxs)("p",{class:"control has-icons-left",children:[Object(d.jsx)("input",{className:"input is-focused is-small has-text-right",type:"number",name:"percepcion",id:"percepcion",value:he,onChange:Ne}),Object(d.jsx)("span",{class:"icon is-small is-left",children:Object(d.jsx)("i",{children:"S/"})})]})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Total Derechos + Intereses + Percepcion"}),Object(d.jsx)("td",{}),Object(d.jsx)("th",{className:"has-text-right",children:"S/".concat(parseInt(me))})]})]})]}),Object(d.jsx)("div",{className:"is-align-content-flex-end is-fullwidth",children:Object(d.jsx)("button",{onClick:function(){l(0),u(0),A(0),U(0),se(0),B(0),xe(0)},className:"button is-link is-fullwidth is-rounded",children:"Clic para Reiniciar"})})]})},b=function(e){var t=e.handleTcChange,s=e.tc;return Object(d.jsxs)("div",{className:"box",children:[Object(d.jsxs)("label",{htmlFor:"tc",className:"label is-small",children:["Tipo de Cambio ",Object(d.jsx)("a",{href:"https://ww3.sunat.gob.pe/cl-ad-ittipocambioconsulta/TipoCambioS01Alias?accion=consultarTipoCambio",target:"_blank",rel:"noreferrer",children:" Buscar en Sunat"})]}),Object(d.jsx)("input",{type:"number",id:"tc",onChange:t,step:"0.001",value:s,className:"input is-2 is-focused is-success"})]})},h=function(){var e=Object(c.useState)(3.701),t=Object(r.a)(e,2),s=t[0],a=t[1];return Object(d.jsxs)("div",{className:"container1 box ",children:[Object(d.jsxs)("div",{className:"card is-justify-content-center is-align-items-center has-text-centered mt-1 message is-warning",children:[Object(d.jsx)("h2",{className:"title m-1 is-4",children:"Convertidor a Soles"}),Object(d.jsxs)("p",{className:"m-1 is-normal",children:["Primero debe elegir el ",Object(d.jsx)("strong",{children:"Tipo de Cambio"})," y luego ingresar el importe en dolares"]})]}),Object(d.jsx)(b,{handleTcChange:function(e){a(e.target.value)},tc:s}),Object(d.jsx)(o,{tc:s}),Object(d.jsx)(j,{})]})},x=function(e){var t=e.valor,s=e.cambiar,c=e.labelName,a=e.placeholder,n=e.disabled,l=e.clase,i=e.id,r=e.required,j=e.clasediv;return Object(d.jsxs)("div",{className:"".concat(j),children:[Object(d.jsx)("input",{type:"text",className:"form-control ".concat(l),placeholder:a,value:t,onChange:s,disabled:n,id:"".concat(i),required:r}),Object(d.jsx)("label",{htmlFor:i,children:c})]})},O=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(c.useState)(0),l=Object(r.a)(n,2),i=l[0],o=l[1],b=Object(c.useState)(0),h=Object(r.a)(b,2),O=h[0],u=h[1],m=Object(c.useState)(.06),p=Object(r.a)(m,2),v=p[0],N=p[1],f=Object(c.useState)(.035),g=Object(r.a)(f,2),S=g[0],A=g[1],I=function(){return parseFloat(s)+parseFloat(i)+parseFloat(O)},C=function(){return I()*v},F=function(){return.16*(I()+C())},y=function(){return.02*(I()+C())},w=function(){return(I()+C()+F()+y())*S},D=function(){return C()+F()+y()+w()},T=function(){var e=.005*I();return e<200?200:e},U=3.715,k={comision:T(),gastosOperativos:50,revision:50,teledespacho:50,gastosAdm:15},M=function(){return k.comision+k.gastosOperativos+k.revision+k.teledespacho+k.gastosAdm};function P(e){for(var t=(e+="").split("."),s=t[0],c=t.length>1?"."+t[1]:"",a=/(\d+)(\d{3})/;a.test(s);)s=s.replace(a,"$1,$2");return s+c}return Object(d.jsxs)("div",{className:"container1",children:[Object(d.jsxs)("div",{className:"card is-justify-content-center is-align-items-center has-text-centered mt-1 message is-warning",children:[Object(d.jsx)("h2",{className:"title m-1 is-4",children:"Calculador Aduanero"}),Object(d.jsxs)("p",{className:"m-1",children:["Debe ingresar el valor ",Object(d.jsx)("strong",{children:"Fob, flete y seguro "}),"en automatico se realizar\xe1 el calculo"]})]}),Object(d.jsx)("div",{className:"shadow",children:Object(d.jsxs)("form",{className:"form was-validated ",children:[Object(d.jsxs)("div",{className:"row justify-content-evenly row-cols-2 p-2",children:[Object(d.jsx)(x,{valor:s,cambiar:function(e){a(e.target.value)},labelName:"FOB (USD)",placeholder:"Ingresar Valor FOB",disabled:!1,clase:"is-invalid",id:"validationDefault01",required:!0,clasediv:"col-sm form-floating p-1"}),Object(d.jsx)(x,{valor:i,cambiar:function(e){o(e.target.value)},labelName:"Flete (USD)",placeholder:"Ingresar Flete",disabled:!1,clase:"is-invalid",id:"validationDefault02",required:!0,clasediv:"col-sm form-floating p-1"})]}),Object(d.jsxs)("div",{className:"row justify-content-evenly row-cols-2 px-2",children:[Object(d.jsx)(x,{valor:O,cambiar:function(e){u(e.target.value)},labelName:"Seguro (USD)",placeholder:"Ingresar Seguro",disabled:!1,clase:"is-invalid",id:"validationDefault03",required:!0,clasediv:"col-sm form-floating p-1"}),Object(d.jsx)(x,{valor:I(),labelName:"CIF (USD)",disabled:!0,clase:"",id:"floatingInput",required:!0,clasediv:"col-sm form-floating p-1"})]})]})}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsxs)("div",{className:"shadow",children:[Object(d.jsx)("h2",{className:"h2 filabg card-header",children:"Derechos Aduaneros"}),Object(d.jsxs)("table",{className:"table table-colapsed table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Concepto"}),Object(d.jsx)("th",{className:"text-end",children:"Tasa %"}),Object(d.jsx)("th",{className:"text-end",children:"USD"}),Object(d.jsx)("th",{className:"text-end",children:"SOL"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Ad Valorem"}),Object(d.jsx)("td",{className:"text-end",children:Object(d.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){N(e.target.value)},children:[Object(d.jsx)("option",{value:"0.06",children:"6%"}),Object(d.jsx)("option",{value:"0",children:"0%"}),Object(d.jsx)("option",{value:"0.11",children:"11%"})]})}),Object(d.jsx)("td",{className:"text-end",children:P(C().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:P(Math.round(C()*U))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Igv"}),Object(d.jsx)("td",{className:"text-end",children:"16%"}),Object(d.jsx)("td",{className:"text-end",children:P(F().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:P(Math.round(F()*U))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Ipm"}),Object(d.jsx)("td",{className:"text-end",children:"2%"}),Object(d.jsx)("td",{className:"text-end",children:P(y().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:P(Math.round(y()*U))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Percepcion"}),Object(d.jsx)("td",{className:"text-end",children:Object(d.jsxs)("select",{className:"form-select","aria-label":"Default select example",onChange:function(e){A(e.target.value)},children:[Object(d.jsx)("option",{value:"0.035",children:"3.5%"}),Object(d.jsx)("option",{value:"0.1",children:"10%"}),Object(d.jsx)("option",{value:"0",children:"0%"})]})}),Object(d.jsx)("td",{className:"text-end",children:P(w().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:P(Math.round(w()*U))})]})]}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{className:"bg-jg-purple",children:[Object(d.jsx)("td",{children:""}),Object(d.jsx)("th",{className:"text-end",children:"Total"}),Object(d.jsxs)("th",{className:"text-end",children:["$",P(D().toFixed(2))]}),Object(d.jsxs)("th",{className:"text-end",children:["S/",P(Math.round(D()*U))]})]})})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"shadow",children:[Object(d.jsx)("h2",{className:"h2 filabg card-header",children:"Agencia de Aduana"}),Object(d.jsxs)("table",{className:"table table-colapsed table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Concepto"}),Object(d.jsx)("th",{className:"text-end",children:"USD"}),Object(d.jsx)("th",{className:"text-end",children:"SOL"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Comision de Aduanas"}),Object(d.jsx)("td",{className:"text-end",children:P(T().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Gastos Operativos"}),Object(d.jsx)("td",{className:"text-end",children:P(k.gastosOperativos.toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Revision Documentaria"}),Object(d.jsx)("td",{className:"text-end",children:P(k.revision.toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Teledespacho"}),Object(d.jsx)("td",{className:"text-end",children:P(k.teledespacho.toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Gastos Administrativos"}),Object(d.jsx)("td",{className:"text-end",children:P(k.gastosAdm.toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]})]}),Object(d.jsxs)("tfoot",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-end",children:"Subtotal"}),Object(d.jsx)("td",{className:"text-end",children:P(M().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{className:"text-end",children:"Igv (18%)"}),Object(d.jsx)("td",{className:"text-end",children:P((.18*M()).toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{className:"bg-jg-purple",children:[Object(d.jsx)("th",{className:"text-end",children:"Total"}),Object(d.jsxs)("th",{className:"text-end",children:["$",P((1.18*M()).toFixed(2))]}),Object(d.jsx)("th",{className:"text-end",children:"-"})]})]})]})]}),Object(d.jsx)("br",{}),Object(d.jsx)(j,{}),Object(d.jsxs)("div",{className:"shadow",children:[Object(d.jsx)("h2",{className:"h2 filabg card-header",children:"Resumen"}),Object(d.jsxs)("table",{className:"table table-hover",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{className:"",children:"Subtotales"}),Object(d.jsx)("th",{className:"text-end",children:"USD"}),Object(d.jsx)("th",{className:"text-end",children:"SOL"})]})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total Derechos de Aduana"}),Object(d.jsx)("td",{className:"text-end",children:"-"}),Object(d.jsx)("td",{className:"text-end",children:P(Math.round(D()*U))})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total Agencia de Aduana"}),Object(d.jsx)("td",{className:"text-end",children:P(M().toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Total IGV"}),Object(d.jsx)("td",{className:"text-end",children:P((.18*M()).toFixed(2))}),Object(d.jsx)("td",{className:"text-end",children:"-"})]})]}),Object(d.jsx)("tfoot",{children:Object(d.jsxs)("tr",{className:"bg-jg-purple",children:[Object(d.jsx)("th",{children:"Total Gastos Aduaneros"}),Object(d.jsxs)("th",{className:"text-end",children:["$",P((1.18*M()).toFixed(2))]}),Object(d.jsxs)("th",{className:"text-end",children:["S/",P(Math.round(D()*U))]})]})})]})]}),Object(d.jsx)("br",{})]})]})},u=function(){return Object(d.jsx)("div",{className:"container1 box",children:Object(d.jsx)(O,{})})},m=function(){return Object(d.jsxs)("div",{className:"box container1 is-flex is-justify-content-space-between id-info",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("span",{className:"button is-danger is-medium is-rounded is-outlined  ",children:"Calculador"})}),Object(d.jsx)(l.b,{to:"/convertidor-de-derechos",children:Object(d.jsx)("span",{className:"button is-info is-medium is-rounded is-outlined",children:"Convertidor"})})]})};var p=function(){return Object(d.jsx)("div",{className:"container container1",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(m,{}),Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{exact:!0,path:"/",children:Object(d.jsx)(u,{})}),Object(d.jsx)(i.a,{exact:!0,path:"/convertidor-de-derechos",children:Object(d.jsx)(h,{})})]}),Object(d.jsx)(m,{}),Object(d.jsx)("br",{})]})})};n.a.render(Object(d.jsx)(l.a,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.ec909cdb.chunk.js.map