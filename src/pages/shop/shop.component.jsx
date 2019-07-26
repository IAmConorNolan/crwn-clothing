import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CollectionOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export class ShopPage extends Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props;
        const collectionRef = firestore.collection('collections');
        
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapShot => { //whenever snapshot returned, do this with snapshot
            const collectionsMap = convertCollectionsSnapshotToMap(snapShot);  
            updateCollections(collectionsMap);
            this.setState({loading: false});
          });
    }

    render() {
        const {match} = this.props;
        const {loading} = this.state;
        return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />} />
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            {
            //Remembering here that match.path returns current url
            //The important part here, is that whatever is in place of :categoryId
            //is stored as a useable value!
            }
        </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});


export default connect(null, mapDispatchToProps)(ShopPage);

