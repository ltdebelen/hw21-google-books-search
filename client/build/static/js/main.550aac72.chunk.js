(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,a,t){e.exports=t(61)},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(29),c=t.n(l),o=t(10);var s=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Google Books"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/",className:"nav-link"},"Search ",r.a.createElement("span",{className:"sr-only"}))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{to:"/saved",className:"nav-link"},"Saved Books ",r.a.createElement("span",{className:"sr-only"}))))))};var m=function(){return r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"React Google Books Search"),r.a.createElement("p",{className:"lead"},"Search for and Save Books of Interest")))},i=t(32),d=t(11),u=t(12),v=t(14),h=t(13),b=t(15),p=t(8),E=t.n(p);var f=function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:e.searchBook},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"text",placeholder:"Search for a book...",onChange:e.handleSearch,required:!0}),r.a.createElement("input",{type:"submit",className:"form-control mt-2 btn btn-primary",value:"Search"}))))};var k=function(e){return r.a.createElement("div",{className:"card flex-row flex-wrap"},r.a.createElement("div",{className:"card-header border-0"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"card-block px-2"},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text text-muted"},"by: ",e.author),r.a.createElement("p",{className:"card-text"},e.description),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mb-3"},"View"),r.a.createElement("button",{className:"btn btn-success ml-3 mb-3",onClick:function(){return e.handleSave(e.title,e.author,e.description,e.link,e.image)}},"Save")),r.a.createElement("div",{className:"w-100"}),r.a.createElement("div",{className:"card-footer w-100 text-muted"}))};var N=function(e){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Results"),r.a.createElement("ul",{className:"list-group list-group-flush"},e.books.map(function(a,t){return r.a.createElement(k,{key:t,image:a.volumeInfo.imageLinks.thumbnail,title:a.volumeInfo.title,author:a.volumeInfo.authors[0],description:a.volumeInfo.description,link:a.volumeInfo.previewLink,handleSave:e.handleSave})}))))},g=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={books:[],searchField:""},t.searchBook=function(e){e.preventDefault(),E.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(t.state.searchField)).then(function(e){e.data.totalItems>0?t.setState({books:Object(i.a)(e.data.items)}):t.setState({books:[]})})},t.handleSearch=function(e){t.setState({searchField:e.target.value})},t.handleSave=function(e,a,t,n,r){var l={title:e,author:a,description:t,link:n,image:r};E.a.post("/api/books",l).then(function(e){200===e.status&&alert("Book is added to your saved list!")})},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{searchBook:this.searchBook,handleSearch:this.handleSearch}),r.a.createElement(N,{handleSave:this.handleSave,books:this.state.books}))}}]),a}(n.Component);var S=function(e){return r.a.createElement("div",{className:"card flex-row flex-wrap"},r.a.createElement("div",{className:"card-header border-0"},r.a.createElement("img",{src:e.image,alt:""})),r.a.createElement("div",{className:"card-block px-2"},r.a.createElement("h4",{className:"card-title"},e.title),r.a.createElement("p",{className:"card-text text-muted"},"by: ",e.author),r.a.createElement("p",{className:"card-text"},e.description),r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"btn btn-primary mb-3"},"View"),r.a.createElement("button",{className:"btn btn-danger ml-3 mb-3",onClick:function(){return e.handleDelete(e.id)}},"Delete")),r.a.createElement("div",{className:"w-100"}),r.a.createElement("div",{className:"card-footer w-100 text-muted"}))};var y=function(e){return r.a.createElement("div",{className:"container mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"Results"),r.a.createElement("ul",{className:"list-group list-group-flush"},e.books.map(function(a,t){return r.a.createElement(S,{key:t,image:a.image,title:a.title,author:a.author,description:a.description,link:a.link,id:a._id,handleDelete:e.handleDelete})}))))},w=function(e){function a(){var e,t;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(v.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={books:[]},t.handleDelete=function(e){E.a.delete("/api/books/".concat(e)).then(function(e){200===e.status&&(alert("Book has been deleted!"),E.a.get("/api/books").then(function(e){t.setState({books:e.data})}))})},t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("/api/books").then(function(a){e.setState({books:a.data})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(y,{books:this.state.books,handleDelete:this.handleDelete}))}}]),a}(n.Component),x=t(6);t(60);var j=function(){return r.a.createElement(o.a,null,r.a.createElement(x.c,null,r.a.createElement(x.a,{exact:!0,path:"/",render:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(s,null),r.a.createElement(m,null),r.a.createElement(g,null))}}),r.a.createElement(x.a,{exact:!0,path:"/saved",component:w})))};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.550aac72.chunk.js.map