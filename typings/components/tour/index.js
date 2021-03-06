import React from "react";
import { StyleSheet, Modal } from "react-native";
import _ from "lodash";
import { BaseComponent } from "../../commons";
import View from "../view";
import Button from "../button";
import Text from "../text";
import { Colors, Typography } from "../../style";
import { Constants } from "../../helpers";
/**
 * [WIP] a Tour component for feature discoverability
 */
class Tour extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onTargetLayout = this.onTargetLayout.bind(this);
        this.renderTargetClone = this.renderTargetClone.bind(this);
    }
    renderTarget() {
        const target = React.Children.only(this.props.children);
        return React.cloneElement(target, {
            onLayout: this.onTargetLayout,
            ref: r => (this.target = r)
        });
    }
    onTargetLayout() {
        this.target.measureInWindow((x, y, width, height) => {
            this.setState({
                targetPosition: {
                    left: x,
                    top: y,
                    width,
                    height
                }
            });
        });
    }
    renderTargetClone() {
        const target = React.Children.only(this.props.children);
        return React.cloneElement(target);
    }
    renderMessage() {
        const { message, messageStyle, onClose } = this.props;
        const { targetPosition } = this.state;
        return (<View style={{
            position: "absolute",
            bottom: targetPosition.height,
            width: Constants.screenWidth
        }}>
        <Text style={[styles.message, messageStyle]}>{message}</Text>
        <Button link label="Got It!" onPress={onClose}/>
      </View>);
    }
    render() {
        const { visible, overlayColor, overlayOpacity } = this.props;
        const { targetPosition } = this.state;
        const shouldShowTour = visible && !_.isUndefined(targetPosition);
        return (<View>
        {this.renderTarget()}
        <Modal visible={shouldShowTour} animationType="fade" transparent>
          <View flex style={{
            backgroundColor: Colors.rgba(overlayColor, overlayOpacity)
        }}>
            {shouldShowTour && (<View style={{
            position: "absolute",
            top: targetPosition.top,
            left: targetPosition.left
        }}>
                <View style={styles.glowWrapper}/>
                {this.renderTargetClone()}
                {this.renderMessage()}
              </View>)}
          </View>
        </Modal>
      </View>);
    }
}
Tour.defaultProps = {
    visible: false,
    overlayColor: Colors.white,
    overlayOpacity: 0.9
};
const styles = StyleSheet.create({
    message: {
        color: Colors.white,
        ...Typography.text70
    },
    glowWrapper: {
        backgroundColor: Colors.blue70,
        position: "absolute",
        top: -4,
        left: -4,
        right: -4,
        bottom: -4,
        borderRadius: 999
    }
});
export default Tour;
