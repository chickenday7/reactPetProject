(this.webpackJsonptsreact=this.webpackJsonptsreact||[]).push([[0],{12:function(e,t,n){e.exports={itemProfileInfo:"FullInfo_itemProfileInfo__iDiQY",itemContacts:"FullInfo_itemContacts__3A_7-",titleItem:"FullInfo_titleItem__1ecLP",descriptionItem:"FullInfo_descriptionItem__10p8D"}},19:function(e,t,n){e.exports={wrapperDescription:"ProfileDescription_wrapperDescription__23tkb",headerDescription:"ProfileDescription_headerDescription__9vd5d",titleItem:"ProfileDescription_titleItem__V02oQ",descriptionItem:"ProfileDescription_descriptionItem__32k1h",itemProfileInfo:"ProfileDescription_itemProfileInfo__2u4A_",profileName:"ProfileDescription_profileName__1W-Jh",profileEdit:"ProfileDescription_profileEdit__3Q5V5"}},22:function(e,t,n){e.exports={wrapperButton:"SuperButton_wrapperButton__2XkQO",wrapperButtonDis:"SuperButton_wrapperButtonDis__3IoVD",defaultDis:"SuperButton_defaultDis__3l6dG",default:"SuperButton_default__1hS5q",red:"SuperButton_red__1VLuR",redDis:"SuperButton_redDis__1PhjZ"}},25:function(e,t,n){e.exports={wrapperMessage:"MessageItemStyle_wrapperMessage__25A9n",blockMessage:"MessageItemStyle_blockMessage__3Tna4",photo:"MessageItemStyle_photo__16Dg4",text:"MessageItemStyle_text__3R7PN"}},26:function(e,t,n){e.exports={wrapperPhoto:"ProfilePhoto_wrapperPhoto__2CPyT",inputProfilePhoto:"ProfilePhoto_inputProfilePhoto__2SQR9",uploadPhotoText:"ProfilePhoto_uploadPhotoText__2R5Ca",wrapperInputPhoto:"ProfilePhoto_wrapperInputPhoto__2UN70"}},27:function(e,t,n){e.exports={wrapperStatus:"StatusWithoutEdit_wrapperStatus__2YIXj",title:"StatusWithoutEdit_title__3B7yN",statusText:"StatusWithoutEdit_statusText__2shI-"}},28:function(e,t,n){e.exports={formWrapper:"LoginStyle_formWrapper__13AH0",buttonWrapper:"LoginStyle_buttonWrapper__1EWY2",input:"LoginStyle_input__K-U5D",checkBox:"LoginStyle_checkBox__1CtRh"}},34:function(e,t,n){e.exports={headerPhoto:"HeaderStyle_headerPhoto__OLZoS",wrapperRightMenu:"HeaderStyle_wrapperRightMenu__C3c80"}},35:function(e,t,n){e.exports={wrapperUsers:"Users_wrapperUsers__oZrBs",title:"Users_title__1RV_b",users:"Users_users__3zNVW"}},38:function(e,t,n){e.exports={user:"UserItemStyle_user__3M2gP",user__name:"UserItemStyle_user__name__1rOxP"}},39:function(e,t,n){e.exports={wrapperDialog:"DialogStyle_wrapperDialog__3xWtl",title:"DialogStyle_title__nAKJ9"}},40:function(e,t,n){e.exports={wrapperMessages:"MessagesStyle_wrapperMessages__169uu",messages:"MessagesStyle_messages__11fjk"}},41:function(e,t,n){e.exports={wrapperEditProfile:"EditProfuleForm_wrapperEditProfile__n-Kf-",wrapperInputCheckBox:"EditProfuleForm_wrapperInputCheckBox__387FQ"}},53:function(e,t,n){e.exports={wrapperProfile:"ProfileInfo_wrapperProfile__2XwnK"}},56:function(e,t,n){},60:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),a=(n(56),n(31)),i=n.n(a),o=n(14),c=n(15),u=n(17),l=n(16),d=(n(60),n(2)),p=n(7),j=n(52),f=n.n(j).a.create({withCredentials:!0,headers:{"API-KEY":"8c93655a-bf70-40c8-9c2a-4929b88b2e49"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),h=function(e,t){return f.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},b=function(e){return f.post("follow/".concat(e)).then((function(e){return e.data}))},O=function(e){return f.delete("follow/".concat(e)).then((function(e){return e.data}))},m=function(e){return f.get("profile/".concat(e))},x=function(e){return f.get("profile/status/".concat(e)).then((function(e){return e.data}))},g=function(e){return f.put("profile/status",{status:e})},_=function(e){return f.put("profile",e).then((function(e){return e.data}))},P=function(e){return f.put("/profile/photo",e).then((function(e){return e.data}))},v=function(){return f.get("auth/me").then((function(e){return e.data}))},w=function(e){var t=e.email,n=e.password,r=e.rememberMe,s=e.captcha;return f.post("/auth/login",{email:t,password:n,rememberMe:r,captcha:s}).then((function(e){return e.data}))},N=function(){return f.delete("/auth/login").then((function(e){return e.data}))},I="SET_USER_DATA",y="LOG_OUT",D="IN_PROGRESS",S="RESULT_AUTH",C="TOGGLE_ERROR",k="SET_PROFILE_PHOTO",E={id:null,email:null,login:null,isAuth:!1,isFetching:!1,authError:!1,ownerPhoto:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(d.a)(Object(d.a)({},e),t.data);case y:return{id:null,email:null,login:null,isAuth:!1,isFetching:!1,authError:!1,ownerPhoto:null};case D:return Object(d.a)(Object(d.a)({},e),{},{isFetching:t.stateFetching});case S:return Object(d.a)(Object(d.a)({},e),{},{isAuth:t.resultAuth});case C:return Object(d.a)(Object(d.a)({},e),{},{authError:t.stateError});case k:return Object(d.a)(Object(d.a)({},e),{},{ownerPhoto:t.ownerPhoto});default:return e}},F=function(e){return{type:D,stateFetching:e}},M=function(){return{type:y}},T=function(e){return{type:S,resultAuth:e}},L=function(e,t,n,r){return{type:I,data:{id:e,email:t,login:n,isAuth:r}}},U=function(e){return{type:C,stateError:e}},R=function(e){return{type:k,ownerPhoto:e}},B=n(8),W=n.p+"static/media/user.c5d8a3f8.png",G=n(34),J=n.n(G),z=n(0),V=function(e){return Object(z.jsxs)("header",{className:"header",children:[Object(z.jsx)("div",{className:"header__logo",children:"logo"}),Object(z.jsx)("div",{className:"header__profile",children:e.auth.isAuth?Object(z.jsxs)("div",{className:J.a.wrapperRightMenu,children:[e.ownerPhoto?Object(z.jsx)("img",{className:J.a.headerPhoto,src:e.ownerPhoto}):Object(z.jsx)("img",{className:J.a.headerPhoto,src:W}),e.auth.login,Object(z.jsx)("button",{onClick:function(){e.logout()},children:"logout"})]}):Object(z.jsx)(B.b,{to:"/login",children:"Login"})})]})},q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.ownerID&&this.props.setOwnerPhoto(this.props.ownerID)}},{key:"componentDidUpdate",value:function(e,t,n){this.props.auth.isAuth&&this.props.auth.isAuth!==e.auth.isAuth&&this.props.setOwnerPhoto(this.props.ownerID)}},{key:"render",value:function(){return Object(z.jsx)(V,Object(d.a)({},this.props))}}]),n}(s.a.Component),K=Object(p.b)((function(e){return{auth:e.auth,ownerPhoto:e.auth.ownerPhoto,ownerID:e.auth.id}}),(function(e){return{logout:function(){e((function(e){N().then((function(t){0===t.resultCode&&e(M())}))}))},setOwnerPhoto:function(t){e(function(e){return function(t){m(e).then((function(e){e.data.photos.small&&t(R(e.data.photos.small))}))}}(t))}}}))(q),H=Object(p.b)((function(e){return{userID:e.auth.id}}))((function(e){var t={textDecoration:"none",color:"orange",fontSize:"22px"};return Object(z.jsx)("nav",{className:"nav",children:Object(z.jsxs)("ul",{children:[Object(z.jsx)("li",{className:"nav__elem",children:Object(z.jsx)(B.b,{to:"/profile/".concat(e.userID),style:function(e){return e.isActive?t:void 0},children:"Profile"})}),Object(z.jsx)("li",{className:"nav__elem",children:Object(z.jsx)(B.b,{to:"/messages",style:function(e){return e.isActive?t:void 0},children:"Messages"})}),Object(z.jsx)("li",{className:"nav__elem",children:Object(z.jsx)(B.b,{to:"/friends",style:function(e){return e.isActive?t:void 0},children:"Friends"})}),Object(z.jsx)("li",{className:"nav__elem",children:Object(z.jsx)(B.b,{to:"/news",style:function(e){return e.isActive?t:void 0},children:"News"})}),Object(z.jsx)("li",{className:"nav__elem",children:Object(z.jsx)(B.b,{to:"/music",style:function(e){return e.isActive?t:void 0},children:"Music"})})]})})})),Q=n(3),Y=n(4),X="ADD_MESSAGE",Z={messageData:[{id:1,message:"Blabla"},{id:2,message:"Lala"},{id:3,message:"Bruh..."},{id:4,message:"JINGO"},{id:5,message:"JANGO"}],arrayUsers:[{id:1,name:"Ilgiz"},{id:2,name:"Pavel"},{id:3,name:"Alena"},{id:4,name:"Olga"},{id:5,name:"Alexander"}]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;return t.type===X?Object(d.a)(Object(d.a)({},e),{},{messageData:[].concat(Object(Y.a)(e.messageData),[{id:e.messageData.length+1,message:t.text}])}):e},ee=n(38),te=n.n(ee),ne=function(e){return Object(z.jsx)("div",{className:te.a.user,children:Object(z.jsx)("div",{className:te.a.user__name,children:Object(z.jsx)(B.b,{to:"/messages/"+e.id,className:function(e){e.isActive;return""},children:e.name})})},e.id)},re=n(35),se=n.n(re),ae=function(e){var t=e.arrayUsers?e.arrayUsers.map((function(e){return Object(z.jsx)(ne,{name:e.name,id:e.id},e.id)})):Object(z.jsx)(ne,{name:"Test User",id:999});return Object(z.jsxs)("div",{className:se.a.wrapperUsers,children:[Object(z.jsx)("div",{className:se.a.title,children:"USERS"}),Object(z.jsx)("div",{className:se.a.users,children:t})]})},ie=n(25),oe=n.n(ie),ce=function(e){return Object(z.jsx)("div",{className:oe.a.wrapperMessage,children:Object(z.jsxs)("div",{className:oe.a.blockMessage,children:[Object(z.jsx)("div",{className:oe.a.photo}),Object(z.jsx)("div",{className:oe.a.text,children:Object(z.jsx)("span",{children:e.message})})]})},e.id)},ue=function(e){return Object(z.jsx)(z.Fragment,{children:e.messageData?e.messageData.map((function(e){return Object(z.jsx)(ce,{message:e.message,id:e.id},e.id)})):Object(z.jsx)("span",{children:"You have no messages"})})},le=function(){return Object(z.jsx)(z.Fragment,{})},de=n(39),pe=n.n(de),je=function(e){return Object(z.jsxs)("div",{className:pe.a.wrapperDialog,children:[Object(z.jsx)("h3",{className:pe.a.title,children:"MESSAGES"}),Object(z.jsx)(ue,{messageData:e.messageData}),Object(z.jsx)(le,{})]})},fe=n(40),he=n.n(fe),be=function(e){return Object(z.jsxs)("div",{className:he.a.wrapperMessages,children:[Object(z.jsx)(ae,{arrayUsers:e.messagesPage.arrayUsers}),Object(z.jsx)("div",{className:he.a.messages,children:Object(z.jsx)(je,{messageData:e.messagesPage.messageData,addMessage:e.addMessage})})]})},Oe=n(32),me=["isAuth"];function xe(e){return Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){var n=Object(Q.f)(),r=Object(Q.h)(),s=t.isAuth,a=Object(Oe.a)(t,me);return s?Object(z.jsx)(e,Object(d.a)(Object(d.a)({},a),{},{location:n,router:r})):Object(z.jsx)(Q.a,{to:"/login"})}))}var ge=n(10),_e=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(z.jsx)(be,Object(d.a)({},this.props))}}]),n}(s.a.Component),Pe=Object(ge.c)(Object(p.b)((function(e){return{messagesPage:e.messagesPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:X,text:e}}(t))}}})),xe)(_e),ve=function(){return Object(z.jsx)("div",{className:"myFriends__title",children:"FIND FRIENDS"})},we=function(){return Object(z.jsx)("div",{className:"myFriends__filter"})},Ne="FOLLOW",Ie="UNFOLLOW",ye="SET_USERS",De="SET_CURRENT_PAGE",Se="SET_TOTAL_USERS",Ce="TOGGLE_PRELOADER",ke="TOGGLE_FOLLOWING",Ee={users:[],totalUsers:0,pageSize:10,currentPage:1,isPreloader:!1,isFollowing:[]},Ae=function(e){return{type:ke,id:e}},Fe=function(e){return{type:Ce,isPreloader:e}},Me=function(e){return{type:Se,totalUsers:e}},Te=function(e){return{type:De,newCurrent:e}},Le=function(e){return{type:Ne,id:e}},Ue=function(e){return{type:Ie,id:e}},Re=function(e){return{type:ye,array:e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ne:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):Object(d.a)({},e)}))});case Ie:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):Object(d.a)({},e)}))});case ye:return Object(d.a)(Object(d.a)({},e),{},{users:Object(Y.a)(t.array)});case De:return Object(d.a)(Object(d.a)({},e),{},{currentPage:t.newCurrent});case Se:return Object(d.a)(Object(d.a)({},e),{},{totalUsers:t.totalUsers});case Ce:return Object(d.a)(Object(d.a)({},e),{},{isPreloader:t.isPreloader});case ke:return Object(d.a)(Object(d.a)({},e),{},{isFollowing:e.isPreloader?[].concat(Object(Y.a)(e.isFollowing),[t.id]):Object(Y.a)(e.isFollowing.filter((function(e){return e!==t.id})))});default:return e}},We=function(e){var t=e.isFollowing.some((function(t){return t===e.user.id}));return Object(z.jsxs)("div",{className:"blockFriend",children:[Object(z.jsx)(B.b,{to:"/profile/".concat(e.user.id),children:Object(z.jsx)("div",{className:"blockFriend__photo",children:Object(z.jsx)("img",{alt:"userPhoto",src:null!==e.user.photos.small?e.user.photos.small:W})})}),Object(z.jsxs)("div",{className:"blockFriend__description",children:[Object(z.jsxs)("div",{className:"description__name",children:[e.user.name," "]}),Object(z.jsx)("div",{className:"description__stat",children:e.user.status}),Object(z.jsx)("div",{className:"description__country",children:"Country"}),Object(z.jsx)("div",{className:"description__city",children:"City"})]}),Object(z.jsx)("div",{className:"blockFriend__button",children:e.user.followed?Object(z.jsx)("div",{className:"buttonAdd",children:Object(z.jsx)("button",{onClick:function(){e.unfollow(e.user.id)},disabled:t,children:"UNFOLLOW"})}):Object(z.jsx)("div",{className:"buttonAdd",children:Object(z.jsx)("button",{onClick:function(){e.follow(e.user.id)},disabled:t,children:"FOLLOW"})})})]})},Ge=function(){return Object(z.jsx)("div",{className:"preloader",children:Object(z.jsx)("div",{className:"preloader__text",children:"LOADING"})})},Je=function(e){return Object(z.jsx)(z.Fragment,{children:e.arrayCount.filter((function(t){return t+2>=e.currentPage&&t-2<=e.currentPage||(1===t||t===e.pagesCount)})).map((function(t,n){return e.currentPage>=4&&(t!==e.currentPage-2&&t!==e.currentPage+2||t!==e.pagesCount&&(t=0)),Object(z.jsx)("div",{children:0===t?Object(z.jsx)("span",{children:"...."}):Object(z.jsx)("span",{className:e.currentPage===t?"activePage":"disabledPage",onClick:function(){e.onCurrentPage(t)},children:t},n)},n)}))})},ze=function(e){return Object(z.jsx)(z.Fragment,{children:Object(z.jsxs)("div",{className:"myFriends__list",children:[e.friendsPage.isPreloader?Object(z.jsx)(Ge,{}):void 0,Object(z.jsx)("div",{className:"pages",children:Object(z.jsx)(Je,{currentPage:e.currentPage,arrayCount:e.arrayCount,pagesCount:e.pagesCount,onCurrentPage:e.onCurrentPage})}),e.friendsPage.users.map((function(t){return Object(z.jsx)(We,{user:t,follow:e.follow,unfollow:e.unfollow,isFollowing:e.friendsPage.isFollowing,isPreloader:e.friendsPage.isPreloader},t.id)}))]})})},Ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).onCurrentPage=function(t){e.props.changePage(t,e.props.friendsPage.pageSize)},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.friendsPage.currentPage,this.props.friendsPage.pageSize)}},{key:"render",value:function(){for(var e=Math.ceil(this.props.friendsPage.totalUsers/this.props.friendsPage.pageSize),t=[],n=1;n<=e;n++)t.push(n);return Object(z.jsx)(ze,Object(d.a)(Object(d.a)({arrayCount:t,pagesCount:e,onCurrentPage:this.onCurrentPage},this.props),{},{currentPage:this.props.friendsPage.currentPage}))}}]),n}(s.a.Component),qe=Object(ge.c)(Object(p.b)((function(e){return{friendsPage:e.friendsPage}}),(function(e){return{getUsers:function(t,n){e(function(e,t){return function(n){n(Fe(!0)),h(e,t).then((function(e){n(Re(e.items)),n(Me(e.totalCount)),n(Fe(!1))}))}}(t,n))},changePage:function(t,n){e(function(e,t){return function(n){n(Te(e)),n(Fe(!0)),h(e,t).then((function(e){n(Re(e.items)),n(Fe(!1))}))}}(t,n))},follow:function(t){e(function(e){return function(t){t(Fe(!0)),t(Ae(e)),b(e).then((function(n){0===n.resultCode&&t(Le(e)),t(Fe(!1)),t(Ae(e))}))}}(t))},unfollow:function(t){e(function(e){return function(t){t(Fe(!0)),t(Ae(e)),O(e).then((function(n){0===n.resultCode&&t(Ue(e)),t(Fe(!1)),t(Ae(e))}))}}(t))}}})))(Ve),Ke=function(){return Object(z.jsxs)("div",{className:"myFriends",children:[Object(z.jsx)(ve,{}),Object(z.jsx)(qe,{}),Object(z.jsx)(we,{})]})},He=n(26),Qe=n.n(He),Ye=function(e){return Object(z.jsxs)("div",{className:Qe.a.wrapperPhoto,children:[Object(z.jsx)("img",{alt:"userPhoto",src:null===e.photos.large?W:e.photos.large}),e.isOwner&&Object(z.jsxs)("div",{className:Qe.a.wrapperInputPhoto,children:[Object(z.jsx)("label",{className:Qe.a.uploadPhotoText,children:"Upload photo"}),Object(z.jsx)("input",{className:Qe.a.inputProfilePhoto,title:"Upload profile photo",type:"file",onChange:function(t){e.uploadProfilePhoto(t.currentTarget.files[0],e.ownerId)},name:"profilePhoto"})]})]})},Xe=n(6),Ze=n(27),$e=n.n(Ze),et=function(e){return Object(z.jsxs)("div",{className:$e.a.wrapperStatus,children:[Object(z.jsx)("span",{className:$e.a.title,children:"Status:"}),e.status?Object(z.jsx)("span",{className:$e.a.statusText,onClick:e.activateEditMode,children:e.status}):Object(z.jsx)("span",{className:$e.a.statusText,onClick:e.activateEditMode,style:{color:"gray"},children:"write your status here"})]})},tt=function(e){return Object(z.jsx)("div",{children:Object(z.jsx)("input",{onChange:e.onChangeStatus,value:e.localStatus,autoFocus:!0,onBlur:e.deactivateEditMode,placeholder:e.status?e.status:"Write your status",defaultValue:e.status})})},nt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={editMode:!1,status:e.props.status?e.props.status:""},e.activateEditMode=function(){e.props.isOwner?e.setState({editMode:!0}):alert("\u0422\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0448\u044c \u043c\u0435\u043d\u044f\u0442\u044c \u0447\u0443\u0436\u0438\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f")},e.deactivateEditMode=function(){e.setState({editMode:!1}),e.props.updateStatus(e.state.status)},e.onChangeStatus=function(t){e.setState({status:t.currentTarget.value})},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(e,t,n){this.props.status!==e.status&&this.setState({status:this.props.status?this.props.status:""})}},{key:"render",value:function(){return Object(z.jsx)(z.Fragment,{children:this.state.editMode?Object(z.jsx)(tt,{localStatus:this.state.status,onChangeStatus:this.onChangeStatus,deactivateEditMode:this.deactivateEditMode,status:this.props.status}):Object(z.jsx)(et,{status:this.props.status,activateEditMode:this.activateEditMode})})}}]),n}(s.a.Component),rt=nt,st=n(12),at=n.n(st),it=function(e){var t=Object.entries(e.profile.contacts).map((function(e,t){return Object(z.jsxs)("div",{className:at.a.itemContacts,children:[Object(z.jsxs)("span",{className:at.a.titleItem,children:[e[0],":"]}),e[1]?Object(z.jsx)("a",{href:e[1],className:at.a.descriptionItem,children:e[1]}):Object(z.jsx)("span",{className:at.a.descriptionItem,children:"-"})]},t)}));return Object(z.jsxs)("div",{className:at.a.wrapperFullInfo,children:[Object(z.jsxs)("div",{className:at.a.itemProfileInfo,children:[Object(z.jsx)("span",{className:at.a.titleItem,children:"Full name:"}),Object(z.jsx)("span",{className:at.a.descriptionItem,children:e.profile.fullName})]}),Object(z.jsxs)("div",{className:at.a.itemProfileInfo,children:[Object(z.jsx)("span",{className:at.a.titleItem,children:"Looking for a job:"}),Object(z.jsx)("span",{className:at.a.descriptionItem,children:e.profile.lookingForAJob?"Yes":"No"})]}),Object(z.jsxs)("div",{className:at.a.itemProfileInfo,children:[Object(z.jsx)("span",{className:at.a.titleItem,children:"Contacts:"}),t]})]})},ot=n(19),ct=n.n(ot),ut=n(33),lt=n(41),dt=n.n(lt),pt=function(e){var t=Object.entries(e.contacts).map((function(t){var n=Object(Xe.a)(t,2),r=n[0],s=n[1],a=r="contacts."+r,i=r.split("."),o=Object(Xe.a)(i,2),c=(o[0],o[1]);return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("label",{children:c}),Object(z.jsx)("input",Object(d.a)({defaultValue:s||""},e.register(a)))]})}));return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("label",{children:"Contacts:"}),t]})},jt=function(e){var t=Object(ut.a)(),n=t.register,s=t.handleSubmit,a=(t.watch,t.formState.errors,Object(r.useState)(e.profile.lookingForAJob)),i=Object(Xe.a)(a,2),o=i[0],c=i[1];return Object(z.jsxs)("form",{className:dt.a.wrapperEditProfile,onSubmit:s((function(t){console.log(t),t.userId=e.ownerID,e.editProfile(t,t.userId),e.toggleEditMode()})),children:[Object(z.jsx)("label",{children:"FullName:"}),Object(z.jsx)("input",Object(d.a)({type:"text",defaultValue:e.profile.fullName},n("fullName",{required:!0}))),Object(z.jsx)("label",{children:"About me:"}),Object(z.jsx)("textarea",Object(d.a)({defaultValue:e.profile.aboutMe?e.profile.aboutMe:""},n("aboutMe",{required:!0}))),Object(z.jsxs)("div",{className:dt.a.wrapperInputCheckBox,onClick:function(){c(!o)},children:[Object(z.jsx)("label",{children:"JOB"}),Object(z.jsx)("input",Object(d.a)({type:"checkbox",checked:o},n("lookingForAJob")))]}),Object(z.jsx)("input",Object(d.a)({defaultValue:e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:""},n("lookingForAJobDescription",{required:!0}))),Object(z.jsx)(pt,{contacts:e.profile.contacts,register:n}),Object(z.jsx)("input",{type:"submit"})]})},ft=n(22),ht=n.n(ft),bt=["red","className","textButton","onClick"],Ot=function(e){var t=e.red,n=e.className,r=e.textButton,s=e.onClick,a=Object(Oe.a)(e,bt),i="".concat(n," ").concat(t?a.disabled?ht.a.redDis:ht.a.red:a.disabled?ht.a.wrapperButtonDis:ht.a.wrapperButton," "),o="".concat(a.disabled?ht.a.defaultDis:ht.a.default," ").concat(r);return Object(z.jsx)("div",{className:i,onClick:function(e){s&&s(e)},children:Object(z.jsx)("button",Object(d.a)({className:o},a))})},mt=function(e){var t=Object(r.useState)(!1),n=Object(Xe.a)(t,2),s=n[0],a=n[1],i=Object(r.useState)(!1),o=Object(Xe.a)(i,2),c=o[0],u=o[1],l=function(){u(!c)},d=e.profile.fullName.split(" ").map((function(e){var t=e.split("");return t[0]=t[0].toUpperCase(),t.join("")})).join(" ");return Object(z.jsxs)("div",{className:ct.a.wrapperDescription,children:[Object(z.jsxs)("div",{className:ct.a.headerDescription,children:[Object(z.jsx)("span",{className:ct.a.profileName,children:d}),e.isOwner&&Object(z.jsx)("span",{onClick:l,className:ct.a.profileEdit,children:"Edit profile"})]}),c?Object(z.jsx)(jt,{toggleEditMode:l,profile:e.profile,ownerID:e.ownerID,editProfile:e.editProfile}):Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(rt,{status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),Object(z.jsxs)("div",{className:ct.a.itemProfileInfo,children:[Object(z.jsx)("span",{className:ct.a.titleItem,children:"About me:"}),Object(z.jsx)("span",{className:ct.a.descriptionItem,children:e.profile.aboutMe?e.profile.aboutMe:"-"})]}),Object(z.jsxs)("div",{className:ct.a.itemProfileInfo,children:[Object(z.jsx)("span",{className:ct.a.titleItem,children:"Looking for a job:"}),Object(z.jsx)("span",{className:ct.a.descriptionItem,children:e.profile.lookingForAJobDescription?e.profile.lookingForAJobDescription:"-"})]}),s&&Object(z.jsx)(it,{profile:e.profile}),Object(z.jsx)(Ot,{onClick:function(){a(!s)},children:"More info"})]})]})},xt=n(53),gt=n.n(xt),_t=function(e){return null!==e.profile?Object(z.jsxs)("div",{className:gt.a.wrapperProfile,children:[Object(z.jsx)(Ye,{photos:e.profile.photos,ownerId:e.ownerID,uploadProfilePhoto:e.uploadProfilePhoto,isOwner:e.isOwner}),Object(z.jsx)(mt,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,ownerID:e.ownerID,editProfile:e.editProfile})]}):Object(z.jsx)(Ge,{})},Pt="UPDATE-POST-TEXT",vt="ADD-POST",wt="ADD-LIKE",Nt="SET-PROFILE",It="SET-STATUS",yt="OWNER_CHECK",Dt={postsData:[{id:1,news:"the weather in St. Petersburg is suitable for studying",likeCount:99},{id:2,news:"tear and sword c:",likeCount:2},{id:3,news:"this is my first project on a react!",likeCount:8}],newPostText:"",profile:null,status:"",isOwner:!1},St=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:return Object(d.a)(Object(d.a)({},e),{},{postsData:[].concat(Object(Y.a)(e.postsData),[{id:e.postsData.length+1,news:e.newPostText,likeCount:0}]),newPostText:""});case Pt:return Object(d.a)(Object(d.a)({},e),{},{newPostText:t.postText});case wt:var n=e.postsData.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),{},{likeCount:e.likeCount+1}):e}));return Object(d.a)(Object(d.a)({},e),{},{postsData:n});case Nt:return Object(d.a)(Object(d.a)({},e),{},{profile:t.profile});case It:return Object(d.a)(Object(d.a)({},e),{},{status:t.textStatus});case yt:return Object(d.a)(Object(d.a)({},e),{},{isOwner:t.ownerID===t.urlProfileID});default:return e}},Ct=function(e){return function(t){m(e).then((function(e){t(Et(e.data))}))}},kt=function(e){return{type:It,textStatus:e}},Et=function(e){return{type:Nt,profile:e}},At=function(e){var t=s.a.createRef();return Object(z.jsxs)("div",{className:"addPosts",children:[Object(z.jsx)("div",{className:"addPosts__input",children:Object(z.jsx)("textarea",{ref:t,placeholder:"Tell me your news...",onChange:function(){var n=t.current.value;e.postChange(n)},value:e.newPostText})}),Object(z.jsx)("div",{className:"addPosts__button",children:Object(z.jsx)("div",{onClick:function(){""===e.newPostText.trim()||" "===e.newPostText.trim()?alert("\u041f\u0443\u0441\u0442\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"):e.addPost()},className:"button",children:Object(z.jsx)("div",{className:"button__text",children:"Send"})})})]})},Ft=function(e){var t=s.a.createRef();return Object(z.jsx)("div",{className:"posts__item",children:Object(z.jsxs)("div",{className:"patternPosts",children:[Object(z.jsx)("img",{alt:"userPhoto",className:"patternPosts__photo",src:W}),Object(z.jsx)("div",{className:"patternPosts__text",children:e.news}),Object(z.jsxs)("div",{ref:t,id:e.id,onClick:function(){var n=Number(t.currentTarget.id);e.addLike(n)},className:"patternPosts__like",children:["like: ",e.like]})]})})},Mt=function(e){var t=e.postsData.map((function(t){return Object(z.jsx)(Ft,{news:t.news,like:t.likeCount,id:t.id,addLike:e.addLike},t.id)}));return Object(z.jsx)("div",{className:"addedPosts",children:t})},Tt=function(){return Object(z.jsx)("div",{className:"posts__title",children:"My posts"})},Lt=function(e){return Object(z.jsxs)("div",{className:"posts",children:[Object(z.jsx)(Tt,{}),Object(z.jsx)(At,{newPostText:e.profilePage.newPostText,postChange:e.postChange,addPost:e.addPost}),Object(z.jsx)(Mt,{postsData:e.profilePage.postsData,addLike:e.addLike})]})},Ut=Object(p.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{addLike:function(t){e({type:wt,id:t})},addPost:function(){e({type:vt})},postChange:function(t){e(function(e){return{type:Pt,postText:e}}(t))}}}))(Lt),Rt=function(e){return Object(z.jsxs)("div",{className:"content",children:[Object(z.jsx)(_t,Object(d.a)({},e)),Object(z.jsx)(Ut,{})]})},Bt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={userId:e.props.location},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.getProfile(+this.props.router.userId),this.props.setStatus(+this.props.router.userId),this.props.ownerCheckAC(+this.props.router.userId,this.props.ownerID)}},{key:"componentDidUpdate",value:function(e,t,n){e.location!==this.props.location&&(this.props.getProfile(+this.props.router.userId),this.props.setStatus(+this.props.router.userId),this.props.ownerCheckAC(+this.props.router.userId,this.props.ownerID))}},{key:"render",value:function(){return Object(z.jsx)(Rt,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:this.props.isOwner,ownerID:this.props.ownerID,editProfile:this.props.editProfile,uploadProfilePhoto:this.props.uploadProfilePhoto})}}]),n}(s.a.Component),Wt=Object(ge.c)(Object(p.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,isOwner:e.profilePage.isOwner,ownerID:e.auth.id}}),(function(e){return{getProfile:function(t){e(Ct(t))},setStatus:function(t){var n;e((n=t,function(e){x(n).then((function(t){e(kt(t))}))}))},updateStatus:function(t){e(function(e){return function(t){g(e).then((function(n){0===n.data.resultCode&&t(kt(e))}))}}(t))},ownerCheckAC:function(t,n){e(function(e,t){return{type:yt,urlProfileID:e,ownerID:t}}(t,n))},editProfile:function(t,n){e(function(e,t){return function(n){_(e).then((function(e){0===e.resultCode&&n(Ct(t))}))}}(t,n))},uploadProfilePhoto:function(t,n){e(function(e,t){return function(n){var r=new FormData;r.append("image",e),P(r).then((function(e){null!==e.data.photos.large&&n(Ct(t))}))}}(t,n))}}})),xe)(Bt),Gt=n(28),Jt=n.n(Gt),zt=function(e){var t=Object(ut.a)(),n=t.register,r=t.handleSubmit,s=t.formState.errors,a=function(){e.toggleError(!1)};return e.isAuth?Object(z.jsx)(Q.a,{to:"/profile/".concat(e.id)}):Object(z.jsx)(z.Fragment,{children:e.isFetching?Object(z.jsx)(Ge,{}):Object(z.jsxs)("form",{className:Jt.a.formWrapper,onSubmit:r((function(t){e.login(t)})),children:[Object(z.jsx)("label",{children:"Login"}),Object(z.jsx)("input",Object(d.a)({onClick:a,placeholder:"Login",className:Jt.a.input,defaultValue:""},n("email",{required:!0}))),s.email&&Object(z.jsx)("span",{children:"This field is required"}),Object(z.jsx)("label",{children:"Password"}),Object(z.jsx)("input",Object(d.a)({onClick:a,className:Jt.a.input,placeholder:"Password",type:"password"},n("password",{required:!0}))),s.password&&Object(z.jsx)("span",{children:"This field is required"}),Object(z.jsxs)("div",{className:Jt.a.checkBox,children:[Object(z.jsx)("input",Object(d.a)({type:"checkbox"},n("rememberMe"))),Object(z.jsx)("span",{children:"remember me"})]}),e.authError&&Object(z.jsx)("span",{style:{color:"red"},children:"Email or password is wrong"}),Object(z.jsx)("input",{type:"submit"})]})})},Vt=function(e){return Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:" LOG IN PAGE"}),Object(z.jsx)(zt,{login:e.login,isFetching:e.isFetching,isAuth:e.isAuth,id:e.id,toggleError:e.toggleError,authError:e.authError})]})},qt=Object(ge.c)(Object(p.b)((function(e){return{authError:e.auth.authError,id:e.auth.id,isFetching:e.auth.isFetching,isAuth:e.auth.isAuth}}),(function(e){return{login:function(t){e(function(e){return function(t){t(F(!0)),w(e).then((function(e){0===e.resultCode?v().then((function(e){var n=e.data,r=n.id,s=n.email,a=n.login;t(L(r,s,a,!0)),t(T(!0)),t(F(!1))})):(t(U(!0)),t(F(!1)))}))}}(t))},toggleError:function(t){e(U(t))}}})))((function(e){return Object(z.jsx)(Vt,Object(d.a)({},e))})),Kt="SET_INITIALIZED",Ht={isInitialized:!1},Qt=function(){return function(e){var t=e((function(e){return v().then((function(t){var n=t.data,r=n.id,s=n.email,a=n.login;e(L(r,s,a,!0))}))}));Promise.all([t]).then((function(){e({type:Kt})}))}},Yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.props.checkInitialize()}},{key:"render",value:function(){return Object(z.jsx)(z.Fragment,{children:this.props.isInitialized?Object(z.jsxs)("div",{className:"app-wrapper",children:[Object(z.jsx)(K,{}),Object(z.jsx)(H,{}),Object(z.jsx)("div",{className:"app-wrapper__content",children:Object(z.jsxs)(Q.d,{children:[Object(z.jsx)(Q.b,{path:"/",element:Object(z.jsx)(Ke,{})}),Object(z.jsx)(Q.b,{path:"/profile/:userId",element:Object(z.jsx)(Wt,{})}),Object(z.jsx)(Q.b,{path:"/messages/*",element:Object(z.jsx)(Pe,{})}),Object(z.jsx)(Q.b,{path:"/friends/",element:Object(z.jsx)(Ke,{})}),Object(z.jsx)(Q.b,{path:"/login/*",element:Object(z.jsx)(qt,{})})]})}),Object(z.jsx)("div",{className:"footer"})]}):Object(z.jsx)(Ge,{})})}}]),n}(s.a.Component),Xt=Object(ge.c)(Object(p.b)((function(e){return{isInitialized:e.app.isInitialized,isAuth:e.auth.isAuth}}),(function(e){return{checkInitialize:function(){e(Qt())}}})))(Yt),Zt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,86)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),s(e),a(e),i(e)}))},$t=n(54),en=Object(ge.b)({profilePage:St,messagesPage:$,friendsPage:Be,auth:A,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;return t.type===Kt?Object(d.a)(Object(d.a)({},e),{},{isInitialized:!0}):e}}),tn=Object(ge.d)(en,Object(ge.a)($t.a));i.a.render(Object(z.jsx)(B.a,{children:Object(z.jsx)(p.a,{store:tn,children:Object(z.jsx)(Xt,{})})}),document.getElementById("root")),Zt()}},[[84,1,2]]]);
//# sourceMappingURL=main.0dd836ae.chunk.js.map