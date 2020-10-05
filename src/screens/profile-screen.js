import React from 'react';
import PropTypes from 'prop-types';

import { Button, View, SafeAreaView, Text } from 'react-native';

const ProfileScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View>
                <Text>
                    The title and onPress handler are required. It is recommended to set accessibilityLabel to help make
                    your app usable by everyone.
                </Text>
                <Button title="Home" onPress={() => navigation.navigate('Home')} />
            </View>
        </SafeAreaView>
    );
};

ProfileScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default ProfileScreen;
