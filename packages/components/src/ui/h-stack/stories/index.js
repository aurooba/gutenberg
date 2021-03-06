/**
 * Internal dependencies
 */
import { View } from '../../view';
import { HStack } from '../index';

export default {
	component: HStack,
	title: 'G2 Components (Experimental)/HStack',
};

export const _default = () => {
	return (
		<HStack spacing={ 3 }>
			<View>One</View>
			<View>Two</View>
			<View>Three</View>
			<View>Four</View>
			<View>Five</View>
		</HStack>
	);
};
