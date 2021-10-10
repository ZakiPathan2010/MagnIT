import React, { Component } from 'react';


//import all the components we are going to use
import { Text, TextInput, TouchableOpacity, View, StyleSheet, StatusBar, ImageBackground, Image, Modal, ActivityIndicator } from 'react-native';

// Responsive FontSize
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

// Responsive UI
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// import Snackbar for bottom message
import Snackbar from 'react-native-snackbar';


export default class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {

            _username: "",
            _otp: "3",
            _password: "",
            _loading_visibility: false,

            Message_Alert_PopUp: false,
            Message_flag: ""

        }

    }


    async componentDidMount() {


        // const userid = await AsyncStorage.getItem('user_id');
    }

    ForgotPasswordValidation = () => {

        if (this.state._username == "") {
            alert("Enter UserName");
        } else {
            var val = Math.floor(1000 + Math.random() * 9000);
            this.Show_Message_Custom_Alert(true);
        }
    }

    // Show  Message Alert Function
    Show_Message_Custom_Alert(visible) {

        this.setState({ Message_Alert_PopUp: visible });

    }

    //  Message Popup UI
    MessageAlertPopUp = () => {
        return (

            <Modal
                visible={this.state.Message_Alert_PopUp}
                transparent={true}
                animationType={"fade"}
                onRequestClose={() => { this.Show_Message_Custom_Alert(!this.state.Message_Alert_PopUp) }} >

                <View style={styles.MSGAlertBGViewStyle}>

                    <View style={styles.MSGAlert_Main_View_Style}>



                        <View style={styles.Bottom_View_Style}>


                            <View style={styles.OTP_View_Style}>

                                <TextInput
                                    style={styles.Username_inputStyle}

                                    placeholder="UserName"
                                    placeholderTextColor="#e2e2e2"
                                    textAlign="center"
                                    value={this.state._otp}
                                    onChangeText={_otp => this.setState({ _otp })}

                                />


                            </View>

                            <View style={styles.OTP_View_Style}>

                                <TextInput
                                    style={styles.Username_inputStyle}

                                    placeholder="UserName"
                                    placeholderTextColor="#e2e2e2"
                                    textAlign="center"
                                    value={this.state._otp}
                                    onChangeText={_otp => this.setState({ _otp })}

                                />


                            </View>

                            <View style={styles.OTP_View_Style}>

                                <TextInput
                                    style={styles.Username_inputStyle}

                                    placeholder="UserName"
                                    placeholderTextColor="#e2e2e2"
                                    textAlign="center"
                                    value={this.state._otp}
                                    onChangeText={_otp => this.setState({ _otp })}

                                />


                            </View>

                            <View style={styles.OTP_View_Style}>

                                <TextInput
                                    style={styles.Username_inputStyle}

                                    placeholder="UserName"
                                    placeholderTextColor="#e2e2e2"
                                    textAlign="center"
                                    value={this.state._otp}
                                    onChangeText={_otp => this.setState({ _otp })}

                                />


                            </View>

                        </View>





                        <TouchableOpacity
                            style={styles.BtnMSGTouchStyle}
                            onPress={() => this.Show_Message_Custom_Alert(!this.state.Message_Alert_PopUp)}
                            activeOpacity={0.2} >

                            <Text style={styles.BtnOkTextStyle}> Ok </Text>

                        </TouchableOpacity>




                    </View>

                </View>


            </Modal>


        )
    }


    render() {

        return (

            <View style={styles.MainView_Style} >
                <StatusBar backgroundColor="#004226" barStyle="light-content" />

                {this.MessageAlertPopUp()}

                <View style={styles.HeaderViewStyle}>
                    <View style={styles.Header_Details_ViewStyle}>

                        <View style={styles.Per_HeaderViewStyle}>
                            <Text style={styles.HeaderTextStyle} >Forgot Password</Text>
                        </View>
                    </View>
                </View>


                {/* ========== Second UI View ========== */}
                <View style={styles.SecondUIViewStyle}>

                    <View style={styles.Login_Text_View_Style}>

                        <Text style={styles.Login_text_style}>Forgot Password</Text>
                    </View>


                    <View style={styles.Login_View_Style}>


                        <View style={styles.Username_View_Style}>

                            <TextInput
                                style={styles.Username_inputStyle}

                                placeholder="UserName"
                                placeholderTextColor="#e2e2e2"

                                value={this.state._username}
                                onChangeText={_username => this.setState({ _username })}

                            />


                        </View>

                    </View>

                    <View style={styles.btn_GO_ViewStyle}>
                        <TouchableOpacity style={styles.Btn_Go_TouchStyle}
                            //    onPress={() => this.props.navigation.navigate('HomeScreen')}
                            onPress={() => this.ForgotPasswordValidation()}

                        >


                            <Text style={styles.Btn_GO_TextStyle} >Send OTP</Text>
                        </TouchableOpacity>

                    </View>

                </View>



            </View>

        );
    }

};


const styles = StyleSheet.create({

    Splashcontainer: {

        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },

    // Main View Container Style
    MainView_Style: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#FFFFFF',
        justifyContent: 'flex-start',

    },


    // ========== HEADER STYLE SHEET ==========
    // Header View Container Style 
    HeaderViewStyle: {

        height: '8%',
        backgroundColor: '#004226',
        justifyContent: 'center',

        alignItems: 'center',

    },

    Header_Details_ViewStyle: {
        flexDirection: 'row',
        width: "95%",
        //    backgroundColor: '#000',
        //   justifyContent: 'center',

        alignItems: 'center',

    },


    HeaderTextStyle: {
        //  fontWeight: 'bold',
        fontSize: RFPercentage(2),
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',

        //marginBottom: 15,
        fontFamily: 'CloisterBlack',

    },


    Header_Title_TextStyle: {
        //  fontWeight: 'bold',
        fontSize: RFPercentage(2),
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',

        //marginBottom: 15,
        fontFamily: 'Poppins-Bold',

    },



    Per_HeaderViewStyle: {

        width: '30%',
        //   backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    },

    Icon_HeaderViewStyle: {

        width: '10%',
        //   backgroundColor: '#000',
        justifyContent: 'center',
        //   alignItems: 'center',

    },

    HeaderIconStyle: {

        width: 18,
        height: 20,

        resizeMode: "contain",
        alignItems: 'center',
        justifyContent: 'center',

        //   backgroundColor: "#000"
    },


    Text_HeaderViewStyle: {

        width: '50%',
        //   backgroundColor: '#000',
        justifyContent: 'center',
        //   alignItems: 'center',

    },

    Weather_HeaderViewStyle: {
        flexDirection: 'row',
        width: '20%',
        //  backgroundColor: '#000',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },

    Weather_IconStyle: {

        width: wp('5%'),
        height: wp('5%'),

        resizeMode: "contain",
        //   alignItems: 'flex-end',
        //  justifyContent: 'center',

        //   backgroundColor: "#000"  textTransform:'capitalize'
    },

    Weather_Text_Style: {


        textAlign: "center",
        color: "#ffffff",

        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
        //  textTransform: 'capitalize'
    },





    // ========== SECOND UI STYLE SHEET ==========

    SecondUIViewStyle: {
        height: '90%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //    backgroundColor:'#000000'

    },

    Login_Text_View_Style: {
        height: '20%',
        justifyContent: 'center',
        //   backgroundColor:'#000000'

    },


    Login_text_style: {
        textAlign: "center",
        color: "#004226",

        fontWeight: "bold",
        fontSize: RFPercentage(6),
        fontFamily: 'Poppins-Bold',
    },

    Credential_Text_View_Style: {
        height: '10%',
        justifyContent: 'flex-start',
        //   backgroundColor: '#000000'

    },

    Credential_text_style: {
        textAlign: "center",
        color: "#004226",


        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
    },

    Login_View_Style: {
        height: '30%',
        width: '85%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        //  backgroundColor: '#000000'

    },

    Bottom_View_Style: {
        width: '85%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row'
        //  backgroundColor: '#000000'

    },


    Username_View_Style: {
        flexDirection: 'row',
        height: '25%',
        width: '85%',

        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e2e2e2'
        //  backgroundColor: '#000000'

    },

    OTP_View_Style: {
        flexDirection: 'row',
        //height: '25%',
        width: '15%',

        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: '5%',
        marginLeft:'2%',
        borderWidth: 1,
        borderRadius: 8,
        borderColor: '#e2e2e2'
        //  backgroundColor: '#000000'

    },

    User_pass_IconStyle: {

        width: wp('8%'),
        height: wp('6%'),

        resizeMode: "contain",
        //   alignItems: 'flex-end',
        //  justifyContent: 'center',

        //  backgroundColor: "#e2e2e2"
    },

    // username password Input text style
    Username_inputStyle: {
        flex: 1,
        color: 'black',
        marginLeft: '2%',
        fontSize: RFPercentage(2),

    },


    forgot_pass_View_Style: {

        height: '15%',
        width: '85%',

        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: '5%',

        //  backgroundColor: '#000'

    },

    forgot_pass_text_style: {
        textAlign: "center",
        color: "#004226",
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular',
    },



    // GO Button View Style
    btn_GO_ViewStyle: {

        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,

    },

    // GO Button Touchable Style
    Btn_Go_TouchStyle: {

        width: wp('75%'),
        height: hp('6%'),
        backgroundColor: '#004226',
        borderRadius: 8,
        justifyContent: 'center',



    },

    // GO Button Touchable Text Style
    Btn_GO_TextStyle: {

        textAlign: 'center',
        color: '#ffffff',
        //  fontSize: hp('3%'),
        fontSize: RFPercentage(3),
        fontFamily: 'Montserrat-Regular'
    },



    //==========  LOADER VIEW STYLE ==========
    Loader_View_Style: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    },





    // =========   Message for Not Registered Customer  Alert Popup View  Style ==========

    // Popup MESSAGE  Backgroun View Style 
    MSGAlertBGViewStyle: {

        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',

        backgroundColor: 'rgba(255, 255, 255, 0.8)'

    },

    // MESSAGE Mian Mobile View Style 
    MSGAlert_Main_View_Style: {
        width: '95%',
        height: '25%',
        //height: hp('70%'),
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff",
        position: 'absolute',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#004226",

        padding: '2%',

        //   borderColor: '#fff',


    },

    Message_TextStyle: {
        color: '#004226',
        textAlign: 'center',
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular'

    },




    // Message Ok Buttton Touchable View Style
    BtnMSGTouchStyle: {

        width: '60%',
        height: '20%',


        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: '#004226',
        // marginBottom: '1%',


        marginTop: '5%',
        borderWidth: 2,
        borderColor: "#004226",
        //padding: '2%',
    },

    // Message Alert Ok Touchable Text Style
    BtnOkTextStyle: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: RFPercentage(2),
        fontFamily: 'Montserrat-Regular'

    },


});