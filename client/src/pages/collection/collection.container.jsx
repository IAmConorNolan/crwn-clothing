import { connect } from 'react-redux'
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import Collection from './collection.component'

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionsLoaded(state) //we use a function here because selector needs to be function
})

export const CollectionContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
) (Collection);

export default CollectionContainer;