import{u as c,o as f,c as _,w as n,a,b as s,H as w,d as r,e as d,L as g,n as V,f as b}from"./app.9f2959f8.js";import{_ as v,a as y}from"./PrimaryButton.21a8ca4c.js";import{_ as t,a as m,b as i}from"./TextInput.2f8f6f3a.js";import"./ApplicationLogo.87d6f15c.js";const x=["onSubmit"],k={class:"mt-4"},$={class:"mt-4"},h={class:"mt-4"},q={class:"flex items-center justify-end mt-4"},F={__name:"Register",setup(N){const e=c({name:"",email:"",password:"",password_confirmation:"",terms:!1}),u=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(p,o)=>(f(),_(v,null,{default:n(()=>[a(s(w),{title:"Register"}),r("form",{onSubmit:b(u,["prevent"])},[r("div",null,[a(t,{for:"name",value:"Name"}),a(m,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:s(e).name,"onUpdate:modelValue":o[0]||(o[0]=l=>s(e).name=l),required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),r("div",k,[a(t,{for:"email",value:"Email"}),a(m,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:s(e).email,"onUpdate:modelValue":o[1]||(o[1]=l=>s(e).email=l),required:"",autocomplete:"username"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),r("div",$,[a(t,{for:"password",value:"Password"}),a(m,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:s(e).password,"onUpdate:modelValue":o[2]||(o[2]=l=>s(e).password=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),r("div",h,[a(t,{for:"password_confirmation",value:"Confirm Password"}),a(m,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:s(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=l=>s(e).password_confirmation=l),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),r("div",q,[a(s(g),{href:p.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[d(" Already registered? ")]),_:1},8,["href"]),a(y,{class:V(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:n(()=>[d(" Register ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{F as default};
