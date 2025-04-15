import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 10,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    InputContainer: {
        marginTop: '50%',
        width: '90%',
        gap: 20
    },
    ForgotPasswordButtom: {
        padding: 10
    },
    ButtonContainer: {
        flexDirection: 'row',
        gap: '20%',
        justifyContent: 'space-between'
    },
    LoginText: { fontWeight: 'bold', color: '#333', },
    LoginOptions: { padding: 10 },
    GoggleContainer: { width: '90%', },
    GoogleIcon: { width: 50, height: 50 },

});