function 左转直到压线 () {
    大左转()
    basic.pause(200)
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            大左转()
        }
    }
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            大左转()
        }
    }
}
function 基础巡线 () {
    PlanetX_Basic.Trackbit_get_state_value()
    if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Three, PlanetX_Basic.TrackbitType.State_0) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_0)) {
        左转()
    } else if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.One, PlanetX_Basic.TrackbitType.State_0) && PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_0)) {
        右转()
    } else {
        前进()
    }
}
function 大左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -30)
    neZha.setMotorSpeed(neZha.MotorList.M2, 50)
}
function 右转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
}
function 左转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M2, 20)
}
function 自动前进 (数字: number) {
    前进()
    basic.pause(数字)
    停止()
    basic.pause(500)
}
input.onButtonPressed(Button.A, function () {
	
})
function 后退 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -20)
    neZha.setMotorSpeed(neZha.MotorList.M2, -20)
}
function 夹 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 30)
    basic.pause(200)
}
function 大右转 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 50)
    neZha.setMotorSpeed(neZha.MotorList.M2, -30)
}
function 前进 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 20)
    neZha.setMotorSpeed(neZha.MotorList.M2, 20)
}
function 巡线到全白停止 () {
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_0)) {
            停止()
            basic.pause(500)
            break;
        } else {
            基础巡线()
        }
    }
}
function 右转直到压线 () {
    大右转()
    basic.pause(200)
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Four, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            大右转()
        }
    }
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitChannelState(PlanetX_Basic.TrackbitChannel.Two, PlanetX_Basic.TrackbitType.State_1)) {
            停止()
            basic.pause(500)
            break;
        } else {
            大右转()
        }
    }
}
function 停止 () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 0)
    neZha.setMotorSpeed(neZha.MotorList.M2, 0)
}
function 松 () {
    neZha.setServoAngel(neZha.ServoTypeList._360, neZha.ServoList.S1, 90)
    basic.pause(200)
}
function 巡线到全黑停止 () {
    while (true) {
        PlanetX_Basic.Trackbit_get_state_value()
        if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5)) {
            停止()
            basic.pause(500)
            break;
        } else {
            基础巡线()
        }
    }
}
停止()
basic.forever(function () {
	
})
