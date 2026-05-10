import { colors } from "@/constants/colors";
import { scale, verticalScale, wp } from "@/utils/responsive";
import { Dimensions, StyleSheet } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get('window');

//**  <============== step one styles start here  ===============>
export const stepOneStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        paddingHorizontal: wp(6),
        paddingBottom: verticalScale(40),
    },
    header: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30),
    },
    title: {
        fontSize: scale(24),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(8),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    form: {
        gap: verticalScale(4),
    },
    footer: {
        marginTop: verticalScale(30),
    },
});

//**  <============== image cropper styles start here  ===============>
export const imageCropperStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    safeArea: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: wp(4),
        height: verticalScale(60),
    },
    headerTitle: {
        color: colors.white,
        fontSize: scale(18),
        fontWeight: '600',
    },
    iconButton: {
        padding: scale(8),
    },
    confirmButton: {
        paddingHorizontal: scale(16),
        paddingVertical: scale(8),
        backgroundColor: colors.primary,
        borderRadius: scale(20),
    },
    confirmText: {
        color: colors.white,
        fontWeight: '700',
        fontSize: scale(14),
    },
    cropperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    image: {
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    cropFrame: {
        borderWidth: 2,
        borderColor: colors.white,
        borderRadius: scale(8),
    },
    footer: {
        padding: scale(20),
        alignItems: 'center',
    },
    ratioSelector: {
        flexDirection: 'row',
        marginBottom: verticalScale(16),
        gap: scale(10),
    },
    ratioButton: {
        paddingHorizontal: scale(12),
        paddingVertical: scale(6),
        borderRadius: scale(12),
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    ratioButtonActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    ratioButtonText: {
        color: colors.white,
        fontSize: scale(12),
        fontWeight: '600',
    },
    ratioButtonTextActive: {
        color: colors.white,
    },
    instruction: {
        color: colors.white,
        fontSize: scale(14),
        opacity: 0.8,
    },
});

//**  <============== image picker styles start here  ===============>
export const ImageModalStyle = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
    },
    sheet: {
        backgroundColor: colors.white,
        borderTopLeftRadius: scale(24),
        borderTopRightRadius: scale(24),
        paddingHorizontal: wp(6),
        paddingBottom: verticalScale(40),
        paddingTop: verticalScale(12),
    },
    handle: {
        width: scale(40),
        height: scale(4),
        backgroundColor: colors.border,
        borderRadius: scale(2),
        alignSelf: 'center',
        marginBottom: verticalScale(20),
    },
    title: {
        fontSize: scale(20),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(4),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
        marginBottom: verticalScale(24),
    },
    options: {
        gap: verticalScale(12),
        marginBottom: verticalScale(24),
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(16),
        backgroundColor: colors.appBg,
        borderRadius: scale(16),
    },
    iconContainer: {
        width: scale(48),
        height: scale(48),
        borderRadius: scale(12),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: scale(16),
    },
    optionText: {
        fontSize: scale(16),
        fontWeight: '600',
        color: colors.text,
    },
    cancelButton: {
        alignItems: 'center',
        padding: scale(12),
    },
    cancelText: {
        fontSize: scale(16),
        color: colors.red,
        fontWeight: '600',
    },
});

//** ! <============== step two styles start here  ===============>
export const StepTwostyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: wp(6),
    },
    header: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30),
    },
    title: {
        fontSize: scale(24),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(8),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    uploadArea: {
        width: wp(70),
        height: wp(70),
        borderRadius: scale(20),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    uploadAreaEmpty: {
        borderWidth: 2,
        borderColor: colors.primary,
        borderStyle: 'dashed',
        backgroundColor: 'rgba(38, 118, 179, 0.05)',
    },
    uploadAreaFilled: {
        borderWidth: 1,
        borderColor: colors.border,
    },
    placeholderContainer: {
        alignItems: 'center',
    },
    iconCircle: {
        width: scale(64),
        height: scale(64),
        borderRadius: scale(32),
        backgroundColor: 'rgba(38, 118, 179, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(16),
    },
    uploadText: {
        fontSize: scale(16),
        fontWeight: '600',
        color: colors.text,
        marginBottom: verticalScale(4),
    },
    uploadHint: {
        fontSize: scale(12),
        color: colors.textLight,
    },
    imageContainer: {
        width: '100%',
        height: '100%',
    },
    previewImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    editBadge: {
        position: 'absolute',
        bottom: scale(12),
        right: scale(12),
        width: scale(32),
        height: scale(32),
        borderRadius: scale(16),
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: colors.white,
    },
    footer: {
        marginBottom: verticalScale(40),
    },
});


//** ! <============== step three styles start here  ===============>
export const StepThreeStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    scrollContent: {
        paddingHorizontal: wp(6),
        paddingBottom: verticalScale(40),
    },
    header: {
        marginTop: verticalScale(20),
        marginBottom: verticalScale(30),
    },
    title: {
        fontSize: scale(24),
        fontWeight: '700',
        color: colors.text,
        marginBottom: verticalScale(8),
    },
    subtitle: {
        fontSize: scale(14),
        color: colors.textLight,
    },
    form: {
        gap: verticalScale(12),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    halfInput: {
        width: '48%',
    },
    footer: {
        marginTop: verticalScale(30),
    },
});

//** <============== step four styles start here  ===============>
export const StepFourStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: wp(6),
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCircle: {
        width: scale(120),
        height: scale(120),
        borderRadius: scale(60),
        backgroundColor: 'rgba(38, 118, 179, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(40),
    },
    textContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: scale(28),
        fontWeight: '700',
        color: colors.text,
        textAlign: 'center',
        marginBottom: verticalScale(16),
        lineHeight: scale(36),
    },
    subtitle: {
        fontSize: scale(16),
        color: colors.textLight,
        textAlign: 'center',
        lineHeight: scale(24),
    },
    footer: {
        marginBottom: verticalScale(40),
    },
});
