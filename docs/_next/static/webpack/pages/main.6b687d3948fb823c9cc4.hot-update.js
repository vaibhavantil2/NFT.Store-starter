webpackHotUpdate_N_E("pages/main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/HotBid/HotBid.module.sass":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/HotBid/HotBid.module.sass ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \".HotBid_icon__2w7Zr {\\n  display: unset;\\n}\\n\\n.HotBid_section__2CdS5 {\\n  overflow: hidden;\\n  padding-top: 40px;\\n}\\n\\n.HotBid_wrapper__M1E5S {\\n  position: relative;\\n}\\n\\n.HotBid_title__1dS00 {\\n  margin-bottom: 64px;\\n  display: table;\\n}\\n@media only screen and (max-width: 767px) {\\n  .HotBid_title__1dS00 {\\n    margin-bottom: 48px;\\n  }\\n}\\n\\n.HotBid_inner__17NQw {\\n  margin: 0 -16px;\\n}\\n@media only screen and (max-width: 767px) {\\n  .HotBid_inner__17NQw {\\n    margin: 0 -8px;\\n  }\\n}\\n\\n.HotBid_card__3gPq8 {\\n  width: 100%;\\n}\", \"\",{\"version\":3,\"sources\":[\"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/components/HotBid/HotBid.module.sass\",\"/Users/shannoncode/repo/Emblem.Currentwork/NFTStarter-next-hypertext/styles/helpers.sass\"],\"names\":[],\"mappings\":\"AAEA;EACI,cAAA;AADJ;;AAGA;EACI,gBAAA;EACA,iBAAA;AAAJ;;AAEA;EACI,kBAAA;AACJ;;AACA;EACI,mBAAA;EACA,cAAA;AAEJ;ACFI;EDFJ;IAIQ,mBAAA;EAIN;AACF;;AAHA;EACI,eAAA;AAMJ;ACXI;EDIJ;IAGQ,cAAA;EAQN;AACF;;AAPA;EACI,WAAA;AAUJ\",\"file\":\"HotBid.module.sass\",\"sourcesContent\":[\"@import ../../styles/helpers\\n\\n.icon\\n    display: unset\\n\\n.section\\n    overflow: hidden\\n    padding-top: 40px\\n\\n.wrapper\\n    position: relative\\n\\n.title\\n    margin-bottom: 64px\\n    display: table\\n    +m\\n        margin-bottom: 48px\\n\\n.inner\\n    margin: 0 -16px\\n    +m\\n        margin: 0 -8px \\n\\n.card\\n    width: 100%\\n\",\"// media queries\\n=w\\n    @media only screen and (max-width: \\\"1419px\\\")\\n        @content\\n=x\\n    @media only screen and (max-width: \\\"1339px\\\")\\n        @content\\n=d\\n    @media only screen and (max-width: \\\"1179px\\\")\\n        @content\\n=t\\n    @media only screen and (max-width: \\\"1023px\\\")\\n        @content \\n=m\\n    @media only screen and (max-width: \\\"767px\\\")\\n        @content\\n=a\\n    @media only screen and (max-width: \\\"639px\\\")\\n        @content\\n=s\\n    @media only screen and (max-width: \\\"474px\\\")\\n        @content\\n\\n// fonts\\n=dm-sans\\n    font-family: 'DM Sans', sans-serif\\n\\n=poppins\\n    font-family: 'Poppins', sans-serif\\n    \\n// colors\\n$white: #ffffff\\n$blue: #3772FF\\n$blue-light: #4BC9F0\\n$purple: #9757D7\\n$purple-light: #CDB4DB\\n$pink: #EF466F\\n$green: #45B26B\\n$asphalt: #E4D7CF\\n$yellow: #FFD166\\n\\n$neutrals1: #141416\\n$neutrals2: #23262F\\n$neutrals3: #353945\\n$neutrals4: #777E90\\n$neutrals5: #B1B5C3\\n$neutrals6: #E6E8EC\\n$neutrals7: #F4F5F6\\n$neutrals8: #FCFCFD\\n\\n// typography\\n=body-1\\n    font-size: 24px\\n    line-height: (32/24)\\n    letter-spacing: -.01em\\n\\n=body-bold-1\\n    font-size: 24px\\n    line-height: (32/24)\\n    font-weight: 600\\n    letter-spacing: -.01em\\n\\n=body-2\\n    font-size: 16px\\n    line-height: (24/16)\\n\\n=body-bold-2\\n    font-size: 16px\\n    line-height: (24/16)\\n    font-weight: 500\\n\\n=caption-1\\n    font-size: 14px\\n    line-height: (24/14)\\n\\n=caption-bold-1\\n    font-size: 14px\\n    line-height: (24/14)\\n    font-weight: 500\\n\\n=caption-2\\n    font-size: 12px\\n    line-height: (20/12)\\n\\n=caption-bold-2\\n    font-size: 12px\\n    line-height: (20/12)\\n    font-weight: 600\\n\\n=hairline-1\\n    font-size: 16px\\n    line-height: 1\\n    font-weight: 700\\n    text-transform: uppercase\\n\\n=hairline-2\\n    font-size: 12px\\n    line-height: 1\\n    font-weight: 700\\n    text-transform: uppercase\\n\\n=button-1\\n    +dm-sans\\n    font-size: 16px\\n    font-weight: 700\\n    line-height: 1\\n\\n=button-2\\n    +dm-sans\\n    font-size: 14px\\n    line-height: (16/14)\\n    font-weight: 700\\n    \\n//triangle\\n=arr($width, $height, $bg, $direction)\\n    width: 0px\\n    height: 0px\\n    border-style: solid\\n    @if $direction == t\\n        border-width: 0 $width / 2 + px $height + px $width / 2 + px\\n        border-color: transparent transparent $bg transparent\\n    @if $direction == r\\n        border-width: $height / 2 + px 0 $height / 2 + px $width + px\\n        border-color: transparent transparent transparent $bg\\n    @if $direction == b\\n        border-width: $height + px $width / 2 + px 0 $width / 2 + px\\n        border-color: $bg transparent transparent transparent\\n    @if $direction == l\\n        border-width: $height / 2 + px $width + px $height / 2 + px 0\\n        border-color: transparent $bg transparent transparent\\n    @if $direction == tl\\n        border-width: $height + px $width + px 0 0\\n        border-color: $bg transparent transparent transparent\\n    @if $direction == tr\\n        border-width: 0 $width + px $height + px 0\\n        border-color: transparent $bg transparent transparent\\n    @if $direction == br\\n        border-width: 0 0 $height + px $width + px\\n        border-color: transparent transparent $bg transparent\\n    @if $direction == bl\\n        border-width: $width + px 0 0 $height + px\\n        border-color: transparent transparent transparent $bg\\n// example\\n// +arr(500,50, #000, l)\\n// +arr(500,50, #000, bl)\\n\\n// placeholder\\n=placeholder\\n    &::placeholder\\n        @content\\n\\n// media query width\\n=r($width)\\n    @media only screen and (max-width: $width+ \\\"px\\\")\\n        @content\\n\\n=rmin($width)\\n    @media only screen and (min-width: $width+ \\\"px\\\")\\n        @content\\n\\n// theme\\n=dark\\n    @at-root :global(.dark-mode) &\\n        @content\\n\\n=dark-body\\n    @at-root .dark-mode\\n        @content\\n\\n=dark-common\\n    @at-root .dark-mode &\\n        @content\"]}]);\n// Exports\nexports.locals = {\n\t\"icon\": \"HotBid_icon__2w7Zr\",\n\t\"section\": \"HotBid_section__2CdS5\",\n\t\"wrapper\": \"HotBid_wrapper__M1E5S\",\n\t\"title\": \"HotBid_title__1dS00\",\n\t\"inner\": \"HotBid_inner__17NQw\",\n\t\"card\": \"HotBid_card__3gPq8\"\n};\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib3RCaWQvSG90QmlkLm1vZHVsZS5zYXNzP2U2OTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyx3QkFBd0IsbUJBQW1CLEdBQUcsNEJBQTRCLHFCQUFxQixzQkFBc0IsR0FBRyw0QkFBNEIsdUJBQXVCLEdBQUcsMEJBQTBCLHdCQUF3QixtQkFBbUIsR0FBRyw2Q0FBNkMsMEJBQTBCLDBCQUEwQixLQUFLLEdBQUcsMEJBQTBCLG9CQUFvQixHQUFHLDZDQUE2QywwQkFBMEIscUJBQXFCLEtBQUssR0FBRyx5QkFBeUIsZ0JBQWdCLEdBQUcsT0FBTywyUEFBMlAsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsS0FBSyxLQUFLLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssVUFBVSxxc0lBQXFzSTtBQUN0c0s7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL2NvbXBvbmVudHMvSG90QmlkL0hvdEJpZC5tb2R1bGUuc2Fzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5Ib3RCaWRfaWNvbl9fMnc3WnIge1xcbiAgZGlzcGxheTogdW5zZXQ7XFxufVxcblxcbi5Ib3RCaWRfc2VjdGlvbl9fMkNkUzUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uSG90QmlkX3dyYXBwZXJfX00xRTVTIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLkhvdEJpZF90aXRsZV9fMWRTMDAge1xcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XFxuICAuSG90QmlkX3RpdGxlX18xZFMwMCB7XFxuICAgIG1hcmdpbi1ib3R0b206IDQ4cHg7XFxuICB9XFxufVxcblxcbi5Ib3RCaWRfaW5uZXJfXzE3TlF3IHtcXG4gIG1hcmdpbjogMCAtMTZweDtcXG59XFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xcbiAgLkhvdEJpZF9pbm5lcl9fMTdOUXcge1xcbiAgICBtYXJnaW46IDAgLThweDtcXG4gIH1cXG59XFxuXFxuLkhvdEJpZF9jYXJkX18zZ1BxOCB7XFxuICB3aWR0aDogMTAwJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL3NoYW5ub25jb2RlL3JlcG8vRW1ibGVtLkN1cnJlbnR3b3JrL05GVFN0YXJ0ZXItbmV4dC1oeXBlcnRleHQvY29tcG9uZW50cy9Ib3RCaWQvSG90QmlkLm1vZHVsZS5zYXNzXCIsXCIvVXNlcnMvc2hhbm5vbmNvZGUvcmVwby9FbWJsZW0uQ3VycmVudHdvcmsvTkZUU3RhcnRlci1uZXh0LWh5cGVydGV4dC9zdHlsZXMvaGVscGVycy5zYXNzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksY0FBQTtBQURKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQUVKO0FDRkk7RURGSjtJQUlRLG1CQUFBO0VBSU47QUFDRjs7QUFIQTtFQUNJLGVBQUE7QUFNSjtBQ1hJO0VESUo7SUFHUSxjQUFBO0VBUU47QUFDRjs7QUFQQTtFQUNJLFdBQUE7QUFVSlwiLFwiZmlsZVwiOlwiSG90QmlkLm1vZHVsZS5zYXNzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgLi4vLi4vc3R5bGVzL2hlbHBlcnNcXG5cXG4uaWNvblxcbiAgICBkaXNwbGF5OiB1bnNldFxcblxcbi5zZWN0aW9uXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgcGFkZGluZy10b3A6IDQwcHhcXG5cXG4ud3JhcHBlclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG5cXG4udGl0bGVcXG4gICAgbWFyZ2luLWJvdHRvbTogNjRweFxcbiAgICBkaXNwbGF5OiB0YWJsZVxcbiAgICArbVxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweFxcblxcbi5pbm5lclxcbiAgICBtYXJnaW46IDAgLTE2cHhcXG4gICAgK21cXG4gICAgICAgIG1hcmdpbjogMCAtOHB4IFxcblxcbi5jYXJkXFxuICAgIHdpZHRoOiAxMDAlXFxuXCIsXCIvLyBtZWRpYSBxdWVyaWVzXFxuPXdcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcXFwiMTQxOXB4XFxcIilcXG4gICAgICAgIEBjb250ZW50XFxuPXhcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcXFwiMTMzOXB4XFxcIilcXG4gICAgICAgIEBjb250ZW50XFxuPWRcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcXFwiMTE3OXB4XFxcIilcXG4gICAgICAgIEBjb250ZW50XFxuPXRcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcXFwiMTAyM3B4XFxcIilcXG4gICAgICAgIEBjb250ZW50IFxcbj1tXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogXFxcIjc2N3B4XFxcIilcXG4gICAgICAgIEBjb250ZW50XFxuPWFcXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiBcXFwiNjM5cHhcXFwiKVxcbiAgICAgICAgQGNvbnRlbnRcXG49c1xcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IFxcXCI0NzRweFxcXCIpXFxuICAgICAgICBAY29udGVudFxcblxcbi8vIGZvbnRzXFxuPWRtLXNhbnNcXG4gICAgZm9udC1mYW1pbHk6ICdETSBTYW5zJywgc2Fucy1zZXJpZlxcblxcbj1wb3BwaW5zXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWZcXG4gICAgXFxuLy8gY29sb3JzXFxuJHdoaXRlOiAjZmZmZmZmXFxuJGJsdWU6ICMzNzcyRkZcXG4kYmx1ZS1saWdodDogIzRCQzlGMFxcbiRwdXJwbGU6ICM5NzU3RDdcXG4kcHVycGxlLWxpZ2h0OiAjQ0RCNERCXFxuJHBpbms6ICNFRjQ2NkZcXG4kZ3JlZW46ICM0NUIyNkJcXG4kYXNwaGFsdDogI0U0RDdDRlxcbiR5ZWxsb3c6ICNGRkQxNjZcXG5cXG4kbmV1dHJhbHMxOiAjMTQxNDE2XFxuJG5ldXRyYWxzMjogIzIzMjYyRlxcbiRuZXV0cmFsczM6ICMzNTM5NDVcXG4kbmV1dHJhbHM0OiAjNzc3RTkwXFxuJG5ldXRyYWxzNTogI0IxQjVDM1xcbiRuZXV0cmFsczY6ICNFNkU4RUNcXG4kbmV1dHJhbHM3OiAjRjRGNUY2XFxuJG5ldXRyYWxzODogI0ZDRkNGRFxcblxcbi8vIHR5cG9ncmFwaHlcXG49Ym9keS0xXFxuICAgIGZvbnQtc2l6ZTogMjRweFxcbiAgICBsaW5lLWhlaWdodDogKDMyLzI0KVxcbiAgICBsZXR0ZXItc3BhY2luZzogLS4wMWVtXFxuXFxuPWJvZHktYm9sZC0xXFxuICAgIGZvbnQtc2l6ZTogMjRweFxcbiAgICBsaW5lLWhlaWdodDogKDMyLzI0KVxcbiAgICBmb250LXdlaWdodDogNjAwXFxuICAgIGxldHRlci1zcGFjaW5nOiAtLjAxZW1cXG5cXG49Ym9keS0yXFxuICAgIGZvbnQtc2l6ZTogMTZweFxcbiAgICBsaW5lLWhlaWdodDogKDI0LzE2KVxcblxcbj1ib2R5LWJvbGQtMlxcbiAgICBmb250LXNpemU6IDE2cHhcXG4gICAgbGluZS1oZWlnaHQ6ICgyNC8xNilcXG4gICAgZm9udC13ZWlnaHQ6IDUwMFxcblxcbj1jYXB0aW9uLTFcXG4gICAgZm9udC1zaXplOiAxNHB4XFxuICAgIGxpbmUtaGVpZ2h0OiAoMjQvMTQpXFxuXFxuPWNhcHRpb24tYm9sZC0xXFxuICAgIGZvbnQtc2l6ZTogMTRweFxcbiAgICBsaW5lLWhlaWdodDogKDI0LzE0KVxcbiAgICBmb250LXdlaWdodDogNTAwXFxuXFxuPWNhcHRpb24tMlxcbiAgICBmb250LXNpemU6IDEycHhcXG4gICAgbGluZS1oZWlnaHQ6ICgyMC8xMilcXG5cXG49Y2FwdGlvbi1ib2xkLTJcXG4gICAgZm9udC1zaXplOiAxMnB4XFxuICAgIGxpbmUtaGVpZ2h0OiAoMjAvMTIpXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcXG5cXG49aGFpcmxpbmUtMVxcbiAgICBmb250LXNpemU6IDE2cHhcXG4gICAgbGluZS1oZWlnaHQ6IDFcXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxuXFxuPWhhaXJsaW5lLTJcXG4gICAgZm9udC1zaXplOiAxMnB4XFxuICAgIGxpbmUtaGVpZ2h0OiAxXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcblxcbj1idXR0b24tMVxcbiAgICArZG0tc2Fuc1xcbiAgICBmb250LXNpemU6IDE2cHhcXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICBsaW5lLWhlaWdodDogMVxcblxcbj1idXR0b24tMlxcbiAgICArZG0tc2Fuc1xcbiAgICBmb250LXNpemU6IDE0cHhcXG4gICAgbGluZS1oZWlnaHQ6ICgxNi8xNClcXG4gICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICBcXG4vL3RyaWFuZ2xlXFxuPWFycigkd2lkdGgsICRoZWlnaHQsICRiZywgJGRpcmVjdGlvbilcXG4gICAgd2lkdGg6IDBweFxcbiAgICBoZWlnaHQ6IDBweFxcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkXFxuICAgIEBpZiAkZGlyZWN0aW9uID09IHRcXG4gICAgICAgIGJvcmRlci13aWR0aDogMCAkd2lkdGggLyAyICsgcHggJGhlaWdodCArIHB4ICR3aWR0aCAvIDIgKyBweFxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYmcgdHJhbnNwYXJlbnRcXG4gICAgQGlmICRkaXJlY3Rpb24gPT0gclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0IC8gMiArIHB4IDAgJGhlaWdodCAvIDIgKyBweCAkd2lkdGggKyBweFxcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkYmdcXG4gICAgQGlmICRkaXJlY3Rpb24gPT0gYlxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0ICsgcHggJHdpZHRoIC8gMiArIHB4IDAgJHdpZHRoIC8gMiArIHB4XFxuICAgICAgICBib3JkZXItY29sb3I6ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBsXFxuICAgICAgICBib3JkZXItd2lkdGg6ICRoZWlnaHQgLyAyICsgcHggJHdpZHRoICsgcHggJGhlaWdodCAvIDIgKyBweCAwXFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB0bFxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkaGVpZ2h0ICsgcHggJHdpZHRoICsgcHggMCAwXFxuICAgICAgICBib3JkZXItY29sb3I6ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSB0clxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwICR3aWR0aCArIHB4ICRoZWlnaHQgKyBweCAwXFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudFxcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBiclxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAwIDAgJGhlaWdodCArIHB4ICR3aWR0aCArIHB4XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZyB0cmFuc3BhcmVudFxcbiAgICBAaWYgJGRpcmVjdGlvbiA9PSBibFxcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAkd2lkdGggKyBweCAwIDAgJGhlaWdodCArIHB4XFxuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRiZ1xcbi8vIGV4YW1wbGVcXG4vLyArYXJyKDUwMCw1MCwgIzAwMCwgbClcXG4vLyArYXJyKDUwMCw1MCwgIzAwMCwgYmwpXFxuXFxuLy8gcGxhY2Vob2xkZXJcXG49cGxhY2Vob2xkZXJcXG4gICAgJjo6cGxhY2Vob2xkZXJcXG4gICAgICAgIEBjb250ZW50XFxuXFxuLy8gbWVkaWEgcXVlcnkgd2lkdGhcXG49cigkd2lkdGgpXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHdpZHRoKyBcXFwicHhcXFwiKVxcbiAgICAgICAgQGNvbnRlbnRcXG5cXG49cm1pbigkd2lkdGgpXFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJHdpZHRoKyBcXFwicHhcXFwiKVxcbiAgICAgICAgQGNvbnRlbnRcXG5cXG4vLyB0aGVtZVxcbj1kYXJrXFxuICAgIEBhdC1yb290IDpnbG9iYWwoLmRhcmstbW9kZSkgJlxcbiAgICAgICAgQGNvbnRlbnRcXG5cXG49ZGFyay1ib2R5XFxuICAgIEBhdC1yb290IC5kYXJrLW1vZGVcXG4gICAgICAgIEBjb250ZW50XFxuXFxuPWRhcmstY29tbW9uXFxuICAgIEBhdC1yb290IC5kYXJrLW1vZGUgJlxcbiAgICAgICAgQGNvbnRlbnRcIl19XSk7XG4vLyBFeHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJpY29uXCI6IFwiSG90QmlkX2ljb25fXzJ3N1pyXCIsXG5cdFwic2VjdGlvblwiOiBcIkhvdEJpZF9zZWN0aW9uX18yQ2RTNVwiLFxuXHRcIndyYXBwZXJcIjogXCJIb3RCaWRfd3JhcHBlcl9fTTFFNVNcIixcblx0XCJ0aXRsZVwiOiBcIkhvdEJpZF90aXRsZV9fMWRTMDBcIixcblx0XCJpbm5lclwiOiBcIkhvdEJpZF9pbm5lcl9fMTdOUXdcIixcblx0XCJjYXJkXCI6IFwiSG90QmlkX2NhcmRfXzNnUHE4XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/HotBid/HotBid.module.sass\n");

/***/ })

})