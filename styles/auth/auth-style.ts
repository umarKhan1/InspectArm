import { colors } from "@/constants/colors";
import { wp, verticalScale, scale } from "@/utils/responsive";
import { Platform, StyleSheet } from "react-native";

//**  <============== forget password styles start here  ===============>
export const forgetPasswordStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: wp(6),
        paddingTop: verticalScale(60),
        paddingBottom: verticalScale(30),
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: verticalScale(30),
    },
    logo: {
        width: scale(50),
        height: scale(50),
    },
    title: {
        fontSize: scale(32),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(8),
        lineHeight: scale(40),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
        marginBottom: verticalScale(30),
    },
    formContainer: {
        marginBottom: verticalScale(20),
    },
    buttonContainer: {
        marginTop: verticalScale(10),
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: Platform.OS === 'ios' ? verticalScale(40) : verticalScale(20),
    },
    footerText: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    signUpText: {
        fontSize: scale(14),
        color: colors.primary,
        fontWeight: '600',
    },
});

// login styles for login screen start here
export const loginStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: wp(6),
        paddingTop: verticalScale(50),
        paddingBottom: verticalScale(30),
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: verticalScale(20),
    },
    logo: {
        width: scale(50),
        height: scale(50),
    },
    title: {
        fontSize: scale(32),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(4),
        lineHeight: scale(40),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
        marginBottom: verticalScale(20),
    },
    formContainer: {
        marginBottom: verticalScale(10),
    },
    forgotPasswordContainer: {
        alignSelf: 'flex-end',
        marginTop: verticalScale(4),
    },
    forgotPasswordText: {
        color: colors.primary,
        fontSize: scale(13),
        fontWeight: '500',
    },
    buttonContainer: {
        marginTop: verticalScale(10),
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(40),
        paddingBottom: verticalScale(30),
    },
    footerText: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    signUpText: {
        fontSize: scale(14),
        color: colors.primary,
        fontWeight: '600',
    },
});



//**  <============== signup styles start here  ===============>
export const signupStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: wp(6),
        paddingTop: verticalScale(40),
        paddingBottom: verticalScale(30),
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: verticalScale(20),
    },
    logo: {
        width: scale(50),
        height: scale(50),
    },
    title: {
        fontSize: scale(32),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(4),
        lineHeight: scale(40),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
        marginBottom: verticalScale(20),
    },
    formContainer: {
        marginBottom: verticalScale(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    phoneWrapper: {
        marginBottom: verticalScale(16),
    },
    label: {
        fontSize: scale(14),
        color: colors.text,
        marginBottom: verticalScale(6),
        fontWeight: '500',
    },
    customPhoneContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: verticalScale(50),
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: scale(8),
        backgroundColor: colors.white,
        paddingHorizontal: scale(14),
    },
    countryPickerButton: {
        marginRight: scale(4),
    },
    callingCodeText: {
        fontSize: scale(15),
        color: colors.text,
        marginRight: scale(8),
        fontWeight: '500',
    },
    phoneTextInput: {
        flex: 1,
        fontSize: scale(15),
        color: colors.text,
        height: '100%',
    },
    errorText: {
        fontSize: scale(12),
        color: colors.red,
        marginTop: verticalScale(4),
    },
    buttonContainer: {
        marginTop: verticalScale(10),
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(30),
        paddingBottom: verticalScale(20),
    },
    footerText: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    signUpText: {
        fontSize: scale(14),
        color: colors.primary,
        fontWeight: '600',
    },
});


//**  <============== otp verification styles start here  ===============>
export const otpStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    content: {
        flex: 1,
        paddingHorizontal: wp(6),
        paddingTop: verticalScale(100),
    },
    title: {
        fontSize: scale(32),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(12),
        lineHeight: scale(40),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
        marginBottom: verticalScale(40),
        lineHeight: scale(20),
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(30),
    },
    otpInput: {
        width: wp(12),
        height: wp(14),
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: scale(8),
        fontSize: scale(24),
        fontWeight: '600',
        color: colors.text,
        textAlign: 'center',
        backgroundColor: colors.appBg,
    },
    otpInputActive: {
        borderColor: colors.primary,
        backgroundColor: colors.white,
    },
    timerContainer: {
        alignItems: 'center',
        marginBottom: verticalScale(40),
    },
    timerText: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    resendText: {
        fontSize: scale(14),
        color: colors.primary,
        fontWeight: '600',
    },
    buttonContainer: {
        marginTop: verticalScale(10),
    },
    footer: {
        marginTop: verticalScale(30),
        alignItems: 'center',
    },
    backText: {
        fontSize: scale(14),
        color: colors.textLight,
        fontWeight: '500',
    },
});
