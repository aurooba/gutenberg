/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
// import { useSelect, useDispatch } from '@wordpress/data';
import {
	AlignmentToolbar,
	BlockControls,
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';
import { ToolbarGroup } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import HeadingLevelDropdown from '../heading/heading-level-dropdown';

export default function QueryTitleEdit( {
	attributes: { content, type, level, textAlign },
	setAttributes,
} ) {
	const TagName = `h${ level }`;
	const tagName = `h${ level }`;
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} ),
	} );
	let titleElement;
	if ( type === 'archive' ) {
		titleElement = (
			<TagName { ...blockProps }>
				{ __( 'Archive title placeholder' ) }
			</TagName>
		);
	} else {
		titleElement = (
			<div { ...blockProps }>
				<RichText
					tagName={ tagName }
					value={ content }
					placeholder={ __( 'Query title' ) }
					allowedFormats={ [ 'core/bold', 'core/italic' ] }
					onChange={ ( newContent ) =>
						setAttributes( { content: newContent } )
					}
					disableLineBreaks={ true }
				/>
			</div>
		);
	}
	return (
		<>
			<BlockControls>
				<ToolbarGroup>
					<HeadingLevelDropdown
						selectedLevel={ level }
						onChange={ ( newLevel ) =>
							setAttributes( { level: newLevel } )
						}
					/>
				</ToolbarGroup>
				<AlignmentToolbar
					value={ textAlign }
					onChange={ ( nextAlign ) => {
						setAttributes( { textAlign: nextAlign } );
					} }
				/>
			</BlockControls>
			{ titleElement }
		</>
	);
}