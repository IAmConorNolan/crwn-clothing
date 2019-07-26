import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';

import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import {createStructuredSelector} from 'reselect';

class App extends React.Component {
  unsubscribeFromAuth = null;

  

  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
         //userRef is returned from this function, contains snapshot.
        userRef.onSnapshot(snapShot => { //whenever snapshot returned, do this with snapshot
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/sign-in' render={() => this.props.currentUser ? (<Redirect to ='/' />) : (<SignInUp />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user)) //whatever object is passed, is an action object sent to every reducer. setCurrentUser returns action object with payload
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
