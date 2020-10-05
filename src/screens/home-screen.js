import React from 'react';

import PropTypes from 'prop-types';
import { Text, SafeAreaView, Button, View } from 'react-native';
import { RowWrapper } from '../styled-components/rows-styled-components';

const HomeScreen = ({ navigation }) => {
    const handleLogout = () =>
        //todo call logout action in app
        navigation.navigate('Auth');

    return (
        <SafeAreaView>
            <Text> Hello, user. </Text>
            <View>
                <RowWrapper>
                    <Button title="Go to profile" onPress={() => navigation.navigate('Profile', { name: 'User' })} />
                    <Button title="Logout" onPress={handleLogout} />
                </RowWrapper>
            </View>
        </SafeAreaView>
    );
};

HomeScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default HomeScreen;
