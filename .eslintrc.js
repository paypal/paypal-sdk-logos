/* @flow */

module.exports = {
    'extends': require.resolve('grumbler-scripts/config/.eslintrc-browser'),
    
    'rules': {
        'react/style-prop-object': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/require-default-props': 'off',
        'react/display-name': 'off'
    }
};