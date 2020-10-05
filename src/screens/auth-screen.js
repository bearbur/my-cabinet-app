import React from 'react';

import PropTypes from 'prop-types';
import { Button } from 'react-native';

const AuthScreen = ({ navigation }) => {
    return <Button title="Go to profile" onPress={() => navigation.navigate('Profile', { name: 'User' })} />;
};

AuthScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default AuthScreen;
