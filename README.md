# 리액트 스터디 
리액트를 이용한 간단한 뷰를 작성해서 기능 테스트 

샘플페이지 : https://kimchunghwan.github.io/react_app/

## 새로 알게 된것들 
property 
- 상위 컴퓨넌트에서 속성값을 취득 

prop-types
- 속성값의 유효체크 (추가 라이브러리 필요)

component LifeCycle 
- Render : componentWillmount() -> render() -> componentDidMount()
- Update : componentWillReceiveProps() -> ShouldComponentUpdate -> ComponentWillUpdate() -> render -> componentDidUpdate

yarn 
- npm용 소스관리툴? php의 composer같은 기능 
- gh-pages를 이용해서 깃페이지를 간단하게 작성가능. 
- 

### command 
``` 
// react install 
npm install -g create-react-app

// creat react app <pj_name> 
create-react-app react_learn

// npm start 
npm start 

 // about yarn
 yarn build
 yarn run deploy
```

### 참고 사이트 
https://github.com/facebook/create-react-app
