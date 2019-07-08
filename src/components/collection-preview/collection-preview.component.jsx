import React from 'react';
import './collection-preview.styles.scss';

import {CollectionItem} from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'> {/* MUST REMEMBER THAT EVERYTHING IN HERE, INLCUIDNG THESE FUNCTIONS GET CALLED WHENEVER COLLECTIONSPREVIEW IS RERENDERED */}
            {
                items
                .filter((i, idx) => idx < 4)
                .map(({id, ...otherItemProps}) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
);

export default CollectionPreview;