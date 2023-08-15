"use strict";(self.webpackChunkblog_app=self.webpackChunkblog_app||[]).push([[561],{1561:(K,_,c)=>{c.r(_),c.d(_,{AdminModule:()=>Y});var d=c(6814),p=c(1776),t=c(9291),y=c(8224),b=c(9862);const g="http://localhost:8080/api/categories";let m=(()=>{class n{constructor(e){this.http=e}createCategory(e){return this.http.post(`${g}`,e)}getAll(){return this.http.get(g)}get(e){return this.http.get(`${g}/${e}`)}create(e){return this.http.post(g,e)}update(e,o){return this.http.put(`${g}/${e}`,o)}delete(e){return this.http.delete(`${g}/${e}`)}deleteAll(){return this.http.delete(g)}findByName(e){return this.http.get(`${g}?name=${e}`)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(b.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var u=c(1839),h=c(7911),a=c(95),f=c(8818);let C=(()=>{class n{constructor(){this.message="Are you sure?",this.title="",this.selectedData={},this.confirmed=new t.vpe,this.cancelled=new t.vpe}confirm(e){this.confirmed.emit(e)}cancel(){this.cancelled.emit()}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirmation-dialog"]],inputs:{message:"message",title:"title",selectedData:"selectedData"},outputs:{confirmed:"confirmed",cancelled:"cancelled"},decls:10,vars:2,consts:[[1,"confirmation-dialog"],[1,"buttons"],[1,"btn","btn-primary",3,"click"],[1,"btn","btn-secondary",3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"div",1)(6,"button",2),t.NdJ("click",function(){return o.confirm(o.selectedData.id)}),t._uU(7,"OK"),t.qZA(),t.TgZ(8,"button",3),t.NdJ("click",function(){return o.cancel()}),t._uU(9,"Cancel"),t.qZA()()()),2&e&&(t.xp6(2),t.Oqu(o.title),t.xp6(2),t.Oqu(o.message))},styles:[".confirmation-dialog[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px;box-shadow:0 2px 10px #0000001a;padding:20px;text-align:center}.confirmation-dialog[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:20px}.confirmation-dialog[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px}"]}),n})();function v(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"div",10),t._uU(5),t.qZA()(),t.TgZ(6,"td")(7,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onEditPost(s))}),t._uU(8,"Edit"),t.qZA(),t.TgZ(9,"button",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onDeletePost(s))}),t._uU(10,"Delete"),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.title),t.xp6(3),t.Oqu(e.shortDescription)}}function x(n,r){1&n&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2,"No records found!"),t.qZA()())}function Z(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",4)(2,"h4",5),t._uU(3,"Blog Posts"),t.qZA(),t.TgZ(4,"button",6),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onCreateBlogPost())}),t._uU(5,"Create Post"),t.qZA()(),t.TgZ(6,"table",7)(7,"thead")(8,"tr")(9,"th"),t._uU(10,"Title"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Short Description"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Actions"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,v,11,2,"tr",8),t.YNc(17,x,3,0,"tr",9),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.posts),t.xp6(1),t.Q6J("ngIf",e.posts.length<1)}}function P(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-confirmation-dialog",14),t.NdJ("confirmed",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.handleConfirm(i))})("cancelled",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.handleCancel())}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("title","Delete Confirmation")("selectedData",e.selectedPost)("message",e.confirmMessage)}}function T(n,r){1&n&&(t.TgZ(0,"div",15),t._uU(1," Loading...\n"),t.qZA())}function M(n,r){if(1&n&&(t.TgZ(0,"option",39),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("value",e.id),t.xp6(1),t.Oqu(e.name)}}function A(n,r){if(1&n&&(t.TgZ(0,"div"),t._UZ(1,"img",40),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("src",e.blogPost.postImage,t.LSH)}}const L=function(){return{height:"300px"}},w=function(){return{standalone:!0}};function S(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",3)(1,"div",16)(2,"h4",5),t._uU(3),t.qZA(),t.TgZ(4,"form",17,18),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(5),s=t.oxw();return t.KtG(s.onAddPost(i))}),t.TgZ(6,"div",19)(7,"label",20),t._uU(8,"Title"),t.qZA(),t.TgZ(9,"input",21),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.title=i)}),t.qZA()(),t.TgZ(10,"div",19)(11,"label",22),t._uU(12,"Category"),t.qZA(),t.TgZ(13,"select",23),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.category=i)}),t.TgZ(14,"option",24),t._uU(15,"Select a category"),t.qZA(),t.YNc(16,M,2,2,"option",25),t.qZA()(),t.TgZ(17,"div",19)(18,"label",26),t._uU(19,"Author"),t.qZA(),t.TgZ(20,"input",27),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.author=i)}),t.qZA()(),t.TgZ(21,"div",19)(22,"label",28),t._uU(23,"Tags"),t.qZA(),t.TgZ(24,"input",29),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.tags=i)}),t.qZA()(),t.TgZ(25,"div",19)(26,"label",30),t._uU(27,"Short Description"),t.qZA(),t.TgZ(28,"input",31),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.shortDescription=i)}),t.qZA()(),t.TgZ(29,"div",19)(30,"label",32),t._uU(31,"Post Image"),t.qZA(),t.TgZ(32,"input",33),t.NdJ("change",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.onFileSelected(i))}),t.qZA(),t.YNc(33,A,2,1,"div",9),t.qZA(),t.TgZ(34,"div",19)(35,"label",34),t._uU(36,"Content"),t.qZA(),t.TgZ(37,"quill-editor",35),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.blogPost.content=i)}),t.qZA()(),t.TgZ(38,"div",36)(39,"button",37),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hideForm())}),t._uU(40,"Cancel"),t.qZA(),t.TgZ(41,"button",38),t._uU(42),t.qZA()()()()()}if(2&n){const e=t.MAs(5),o=t.oxw();t.xp6(3),t.Oqu(o.isEditPost?"Update Post":"Create Post"),t.xp6(6),t.Q6J("ngModel",o.blogPost.title),t.xp6(4),t.Q6J("ngModel",o.blogPost.category),t.xp6(3),t.Q6J("ngForOf",o.categoryList),t.xp6(4),t.Q6J("ngModel",o.blogPost.author),t.xp6(4),t.Q6J("ngModel",o.blogPost.tags),t.xp6(4),t.Q6J("ngModel",o.blogPost.shortDescription),t.xp6(5),t.Q6J("ngIf",o.blogPost.postImage),t.xp6(4),t.Akn(t.DdM(14,L)),t.Q6J("ngModel",o.blogPost.content)("ngModelOptions",t.DdM(15,w)),t.xp6(4),t.Q6J("disabled",!e.valid),t.xp6(1),t.Oqu(o.isEditPost?"Update Post":"Create Post")}}let q=(()=>{class n{constructor(e,o,i,s){this.blogPostService=e,this.categoryService=o,this.loadingService=i,this.toastService=s,this.posts=[],this.showModal=!1,this.confirmMessage="",this.selectedPost={},this.postContent="",this.categoryList=[],this.category={},this.isShowCreatePost=!1,this.postImageBase64String="",this.isEditPost=!1,this.blogPost={}}ngOnInit(){this._getCategoryList(),this._getBlogPostList()}_getBlogPostList(){this.blogPostService.getAll().subscribe({next:e=>{console.log("getAll() blog post result: ",e),this.posts=e},error:e=>{console.log("error: ",e)},complete:()=>{}})}onDeletePost(e){console.log("onDeletePost post: ",e),this.selectedPost=e,this.confirmMessage=`Are you sure you want to delete ${e.title} post?`,this.showModal=!0}handleConfirm(e){console.log("handleConfirm postId: ",e),this.blogPostService.delete(e).subscribe({next:o=>{console.log("delete post result: ",o),this.posts=this.posts.filter(i=>i.id!==e)},error:o=>{console.log("error: ",o)},complete:()=>{this._clearConfirmationFields()}})}handleCancel(){this.showModal=!1,this._clearConfirmationFields()}onEditPost(e){this.isEditPost=!0,this.blogPost.id=e.id,this.blogPost.title=e.title,this.blogPost.category=e.category,this.blogPost.author=e.author,this.blogPost.tags=e.tags,this.blogPost.shortDescription=e.shortDescription,this.blogPost.postImage=e.postImage,this.blogPost.content=e.content,console.log("this.blogPost: ",this.blogPost)}onCreateBlogPost(){this.isShowCreatePost=!0}onAddPost(e){console.log("this.blogPost.tags: ",this.blogPost.tags);let o=Array.isArray(this.blogPost.tags)?this.blogPost.tags:this.blogPost.tags?this.blogPost.tags.split(","):[];const i={title:this.blogPost.title,category:this.blogPost.category,author:this.blogPost.author,tags:o,content:this.blogPost.content,shortDescription:this.blogPost.shortDescription,postImage:this.blogPost.postImage};this.loadingService.show(),this.isEditPost?this._updateBlogPost(i):this._createBlogPost(i)}_updateBlogPost(e){this.blogPostService.update(this.blogPost.id,e).subscribe({next:o=>{console.log("update blog result: ",o),this.toastService.show("Post updated successfully!",{type:"bg-success",title:"Success"});const i=this.posts.findIndex(s=>s.id===this.blogPost.id);-1!==i&&(e.id=this.blogPost.id,this.posts[i]=e),console.log("AFTER UPDATE: this.posts: ",this.posts)},error:o=>{console.log("error: ",o),this.loadingService.hide()},complete:()=>{this.blogPost={},this.isEditPost=!1,this.loadingService.hide()}})}_createBlogPost(e){this.blogPostService.create(e).subscribe({next:o=>{console.log("result: ",o),this.toastService.show("Post created successfully!",{type:"bg-success",title:"Success"}),this.posts.push(o)},error:o=>{console.log("error: ",o),this.loadingService.hide()},complete:()=>{this.blogPost={},this.isShowCreatePost=!1,this.loadingService.hide()}})}_getCategoryList(){this.loadingService.show(),this.categoryService.getAll().subscribe({next:e=>{console.log("_getCategoryList result: ",e),this.categoryList=e},error:e=>{console.log("error while getting category list:",e),this.loadingService.hide()},complete:()=>{console.log("completed api"),this.loadingService.hide()}})}hideForm(){this.category={},this.postContent="",this.isEditPost=!1,this.isShowCreatePost=!1,this.blogPost={}}onFileSelected(e){const o=e.target.files[0];o&&this._convertToBase64(o)}_convertToBase64(e){const o=new FileReader;o.readAsDataURL(e),o.onload=()=>{this.blogPost.postImage=o.result}}_clearConfirmationFields(){this.selectedPost={},this.confirmMessage="",this.showModal=!1}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(y.u),t.Y36(m),t.Y36(u.b),t.Y36(h.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-post-list"]],decls:5,vars:6,consts:[["class","container mt-5",4,"ngIf"],[3,"title","selectedData","message","confirmed","cancelled",4,"ngIf"],["class","loader-overlay",4,"ngIf"],[1,"container","mt-5"],[1,"d-flex","justify-content-between","mb-3"],[1,"mb-4"],[1,"btn","btn-primary",3,"click"],[1,"table","table-striped","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"post-content"],[1,"btn","btn-warning","m-2",3,"click"],[1,"btn","btn-danger","m-2",3,"click"],["colspan","3"],[3,"title","selectedData","message","confirmed","cancelled"],[1,"loader-overlay"],[1,"jumbotron"],[3,"ngSubmit"],["postForm","ngForm"],[1,"form-group"],["for","title"],["type","text","id","title","required","","name","title",1,"form-control",3,"ngModel","ngModelChange"],["for","category"],["id","category","name","category","required","",1,"form-control",3,"ngModel","ngModelChange"],["value","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["for","author"],["type","text","id","author","required","","name","author",1,"form-control",3,"ngModel","ngModelChange"],["for","tags"],["type","text","id","tags","required","","name","tags",1,"form-control",3,"ngModel","ngModelChange"],["for","shortDescription"],["type","text","id","shortDescription","required","","name","shortDescription",1,"form-control",3,"ngModel","ngModelChange"],["for","postImage"],["type","file","id","pImage","required","","name","pImage","accept","image/*",1,"form-control",3,"change"],["for","content"],[3,"ngModel","ngModelOptions","ngModelChange"],[1,"action-btns"],["type","button",1,"m-2","btn","btn-danger",3,"click"],["type","submit",1,"m-2","btn","btn-primary",3,"disabled"],[3,"value"],["alt","Selected Image",1,"post-image",3,"src"]],template:function(e,o){1&e&&(t.YNc(0,Z,18,2,"div",0),t.YNc(1,P,1,3,"app-confirmation-dialog",1),t.YNc(2,T,2,0,"div",2),t.ALo(3,"async"),t.YNc(4,S,43,16,"div",0)),2&e&&(t.Q6J("ngIf",!o.isShowCreatePost&&!o.isEditPost),t.xp6(1),t.Q6J("ngIf",o.showModal),t.xp6(1),t.Q6J("ngIf",t.lcZ(3,4,o.loadingService.loading$)),t.xp6(2),t.Q6J("ngIf",o.isShowCreatePost||o.isEditPost))},dependencies:[d.sg,d.O5,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.F,f.g6,C,d.Ov],styles:[".form-group[_ngcontent-%COMP%]{margin:2%}.action-btns[_ngcontent-%COMP%]{margin:2%;display:flex;justify-content:right}.post-image[_ngcontent-%COMP%]{max-width:300px;max-height:300px}"]}),n})();var J=c(7762);function U(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"app-confirmation-dialog",10),t.NdJ("confirmed",function(i){t.CHM(e);const s=t.oxw(2);return t.KtG(s.handleConfirm(i))})("cancelled",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.handleCancel())}),t.qZA()}if(2&n){const e=t.oxw(2);t.Q6J("title","Delete Confirmation")("selectedData",e.selectedCategory)("message",e.confirmMessage)}}function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"button",11),t._uU(5,"View"),t.qZA(),t.TgZ(6,"button",12),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onEditCategory(s))}),t._uU(7,"Edit"),t.qZA(),t.TgZ(8,"button",13),t.NdJ("click",function(){const s=t.CHM(e).$implicit,l=t.oxw(2);return t.KtG(l.onDeleteCategory(s))}),t._uU(9,"Delete"),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(2),t.Oqu(e.name)}}function D(n,r){1&n&&(t.TgZ(0,"tr")(1,"td",14),t._uU(2,"No records found!"),t.qZA()())}function I(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",3)(2,"h4",4),t._uU(3,"Categories"),t.qZA(),t.TgZ(4,"button",5),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.onCreateCategory())}),t._uU(5,"Create Category"),t.qZA()(),t.YNc(6,U,1,3,"app-confirmation-dialog",6),t.TgZ(7,"table",7)(8,"thead")(9,"tr")(10,"th"),t._uU(11,"Category Name"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Actions"),t.qZA()()(),t.TgZ(14,"tbody"),t.YNc(15,N,10,1,"tr",8),t.YNc(16,D,3,0,"tr",9),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngIf",e.showModal),t.xp6(9),t.Q6J("ngForOf",e.categoryList),t.xp6(1),t.Q6J("ngIf",e.categoryList.length<1)}}function E(n,r){1&n&&(t.TgZ(0,"div",15),t._uU(1," Loading...\n"),t.qZA())}function O(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",2)(1,"div",16)(2,"h2"),t._uU(3,"Create New Category"),t.qZA(),t.TgZ(4,"form",17,18),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.MAs(5),s=t.oxw();return t.KtG(s.onSubmit(i))}),t.TgZ(6,"div",19)(7,"label",20),t._uU(8,"Category Name"),t.qZA(),t.TgZ(9,"input",21),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.category.name=i)}),t.qZA()(),t.TgZ(10,"button",22),t._uU(11),t.qZA(),t.TgZ(12,"button",23),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.hideForm())}),t._uU(13,"Cancel"),t.qZA()()()()}if(2&n){const e=t.MAs(5),o=t.oxw();t.xp6(9),t.Q6J("ngModel",o.category.name),t.xp6(1),t.Q6J("disabled",!e.valid),t.xp6(1),t.hij(" ",o.isEdit?"Update Category":"Create Category","")}}const Q=[{path:"",component:(()=>{class n{constructor(e,o){this.route=e,this.navigationService=o,this.username="",this.password="",this.modalMessage=""}onSubmit(e){e.valid&&("admin"===this.username&&"123"===this.password?(console.log("Login successful"),this.navigationService.login(),this.route.navigate(["/admin/posts"])):console.log("Invalid credentials"))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.F0),t.Y36(J.f))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-login"]],decls:15,vars:2,consts:[[1,"container","mt-5"],[3,"ngSubmit"],["loginForm","ngForm"],[1,"form-group"],["for","username"],["type","text","id","username","name","username","required","",1,"form-control",3,"ngModel","ngModelChange"],["for","password"],["type","password","id","password","name","password","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"mt-2","btn","btn-primary"]],template:function(e,o){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Admin Login"),t.qZA(),t.TgZ(3,"form",1,2),t.NdJ("ngSubmit",function(){t.CHM(i);const l=t.MAs(4);return t.KtG(o.onSubmit(l))}),t.TgZ(5,"div",3)(6,"label",4),t._uU(7,"Username"),t.qZA(),t.TgZ(8,"input",5),t.NdJ("ngModelChange",function(l){return o.username=l}),t.qZA()(),t.TgZ(9,"div",3)(10,"label",6),t._uU(11,"Password"),t.qZA(),t.TgZ(12,"input",7),t.NdJ("ngModelChange",function(l){return o.password=l}),t.qZA()(),t.TgZ(13,"button",8),t._uU(14,"Login"),t.qZA()()()}2&e&&(t.xp6(8),t.Q6J("ngModel",o.username),t.xp6(4),t.Q6J("ngModel",o.password))},dependencies:[a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F]}),n})()},{path:"posts",component:q},{path:"categories",component:(()=>{class n{constructor(e,o,i){this.categoryService=e,this.loadingService=o,this.toastService=i,this.isShowCreateCategory=!1,this.category={},this.showModal=!1,this.confirmMessage="",this.selectedCategory={},this.categoryList=[],this.isEdit=!1,this._getCategoryList()}handleConfirm(e){console.log("handleConfirm categoryId: ",e),this.categoryService.delete(e).subscribe({next:o=>{this._resetFields(),console.log("delete category result: ",o),this.categoryList=this.categoryList.filter(i=>i.id!==e)},error:o=>{console.log("error: ",o)},complete:()=>{this._resetFields()}})}handleCancel(){this._resetFields()}_createCategory(){this.categoryService.createCategory(this.category.name).subscribe({next:e=>{console.log("create category result: ",e),this.categoryList.push(e),this.toastService.show("Category created successfully!",{type:"bg-success",title:"Success"})},error:e=>{console.log("error:",e)},complete:()=>{console.log("completed api call"),this.isShowCreateCategory=!1}})}_updateCategory(){this.categoryService.update(this.category.id,this.category).subscribe({next:e=>{console.log("update category result: ",e);let o=this.categoryList.findIndex(i=>i.id===this.category.id);-1!=o&&(this.categoryList[o]=this.category),this.toastService.show("Category created successfully!",{type:"bg-success",title:"Success"})},error:e=>{console.log("error:",e)},complete:()=>{console.log("completed api call"),this.isShowCreateCategory=!1,this.category={},this._resetFields()}})}_resetFields(){this.selectedCategory={},this.category={},this.confirmMessage="",this.showModal=!1,this.isEdit=!1}onDeleteCategory(e){this.selectedCategory=e,this.confirmMessage=`Are you sure you want to delete ${e.name} category?`,this.showModal=!0}onCreateCategory(){this.isShowCreateCategory=!0}hideForm(){this.category={},this.isShowCreateCategory=!1}_getCategoryList(){this.loadingService.show(),this.categoryService.getAll().subscribe({next:e=>{console.log("_getCategoryList result: ",e),this.categoryList=e},error:e=>{console.log("error while getting category list:",e)},complete:()=>{console.log("completed api"),this.loadingService.hide()}})}onEditCategory(e){console.log("onEditCategory category: ",e),this.isShowCreateCategory=!0,this.isEdit=!0,this.category.id=e.id,this.category.name=e.name}onSubmit(e){e.valid&&(this.isEdit?this._updateCategory():this._createCategory())}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m),t.Y36(u.b),t.Y36(h.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-category-list"]],decls:4,vars:5,consts:[["class","container mt-5",4,"ngIf"],["class","loader-overlay",4,"ngIf"],[1,"container","mt-5"],[1,"d-flex","justify-content-between","mb-3"],[1,"mb-4"],[1,"btn","btn-primary",3,"click"],[3,"title","selectedData","message","confirmed","cancelled",4,"ngIf"],[1,"table","table-striped","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"title","selectedData","message","confirmed","cancelled"],[1,"btn","btn-primary","me-2"],[1,"btn","btn-warning","me-2",3,"click"],[1,"btn","btn-danger",3,"click"],["colspan","3"],[1,"loader-overlay"],[1,"jumbotron","p-4"],[3,"ngSubmit"],["categoryForm","ngForm"],[1,"form-group"],["for","name"],["type","text","id","name","name","name","required","",1,"form-control",3,"ngModel","ngModelChange"],["type","submit",1,"m-2","btn","btn-primary",3,"disabled"],["type","button",1,"m-2","btn","btn-danger",3,"click"]],template:function(e,o){1&e&&(t.YNc(0,I,17,3,"div",0),t.YNc(1,E,2,0,"div",1),t.ALo(2,"async"),t.YNc(3,O,14,3,"div",0)),2&e&&(t.Q6J("ngIf",!o.isShowCreateCategory),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,3,o.loadingService.loading$)),t.xp6(2),t.Q6J("ngIf",o.isShowCreateCategory))},dependencies:[d.sg,d.O5,a._Y,a.Fj,a.JJ,a.JL,a.Q7,a.On,a.F,C,d.Ov]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.Bz.forChild(Q),p.Bz]}),n})(),Y=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,a.u5,k,f.fi]}),n})()}}]);