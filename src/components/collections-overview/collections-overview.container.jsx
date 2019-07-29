import { connect } from 'react-redux'
import CollectionsOverview from './collections-overview.component'
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/with-spinner.component'
import { createStructuredSelector } from 'reselect';
import {compose} from 'redux';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionFetching
})

export const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionsOverview); //compose is just making this easier to read! same is connect(mapstatetoprops)(withspinner(collectionsoverview))

export default CollectionsOverviewContainer;