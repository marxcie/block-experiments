/**
 * WordPress dependencies
 */

import { getCategories, setCategories } from '@wordpress/blocks';

/**
 * Internal dependencies
 */

import { TinkerBlocksLogo } from './block-icons';

setCategories( [
	{
		slug: 'block-experiments',
		title: 'Block Experiments',
		icon: <TinkerBlocksLogo />,
	},
	...getCategories(),
] );

/**
 * Load all our blocks
 */
import * as bauhausCentenaryBlock from '../blocks/bauhaus-centenary/src';
import * as duotoneFilter from '../blocks/duotone-filter/src';
import * as eventBlock from '../blocks/event/src';
import * as layoutGridBlock from '../blocks/layout-grid/src';
import * as motionBackgroundBlock from '../blocks/motion-background/src';
import * as starscapeBlock from '../blocks/starscape/src';
import * as wavesBlock from '../blocks/waves/src';
import * as bookBlock from '../blocks/book/src';

// Instantiate the blocks, adding them to our block category
bauhausCentenaryBlock.registerBlock();
duotoneFilter.registerBlock();
eventBlock.registerBlock();
layoutGridBlock.registerBlock();
motionBackgroundBlock.registerBlock();
starscapeBlock.registerBlock();
wavesBlock.registerBlock();
bookBlock.registerBlock();
