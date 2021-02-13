/**
 * WordPress dependencies
 */
import { RichText } from '@wordpress/block-editor';

export default [
	{
		attributes: {
			src: {
				type: 'string',
				source: 'attribute',
				selector: 'audio',
				attribute: 'src',
			},
			caption: {
				type: 'string',
				source: 'html',
				selector: 'figcaption',
			},
			id: {
				type: 'number',
			},
			autoplay: {
				type: 'boolean',
				source: 'attribute',
				selector: 'audio',
				attribute: 'autoplay',
			},
			loop: {
				type: 'boolean',
				source: 'attribute',
				selector: 'audio',
				attribute: 'loop',
			},
			preload: {
				type: 'string',
				source: 'attribute',
				selector: 'audio',
				attribute: 'preload',
			},
			muted: {
				type: 'boolean',
				source: 'attribute',
				selector: 'audio',
				attribute: 'muted',
			},
		},
		supports: {
			align: true,
		},
		save( { attributes } ) {
			const { autoplay, muted, caption, loop, preload, src } = attributes;

			return (
				<figure>
					<audio
						controls="controls"
						src={ src }
						autoPlay={ autoplay }
						loop={ loop }
						preload={ preload }
						muted={ muted }
					/>
					{ ! RichText.isEmpty( caption ) && (
						<RichText.Content
							tagName="figcaption"
							value={ caption }
						/>
					) }
				</figure>
			);
		},
	},
];
