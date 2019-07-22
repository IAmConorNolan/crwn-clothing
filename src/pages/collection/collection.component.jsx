import React from 'react'
import './collection.styles.scss';
import { connect } from 'react-redux'
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection}) => {
    const {title, items} = collection;
    return(
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
        {
            items.map(item =>
                <CollectionItem key={item.id} item={item} className='.collection-item' />
                )
        }
        </div>
    </div>
);}

const mapStateToProps = (state, ownProps) => (
    {
        collection: selectCollection(ownProps.match.params.collectionId)(state), //The first part of this returns a fxn, and then we pass state to that fxn.
    }
);

export default connect(mapStateToProps, null)(CollectionPage);
