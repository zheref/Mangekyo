import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

export type DeviceType = 'iphone14' | 'iphone14Pro' | 'pixel7' | 'galaxyS23';

interface DeviceFrameProps {
  children: ReactNode;
  deviceType?: DeviceType;
  showFrame?: boolean;
}

const deviceDimensions = {
  iphone14: {
    width: 390,
    height: 844,
    name: 'iPhone 14',
    notch: true,
  },
  iphone14Pro: {
    width: 393,
    height: 852,
    name: 'iPhone 14 Pro',
    notch: true,
  },
  pixel7: {
    width: 412,
    height: 915,
    name: 'Pixel 7',
    notch: false,
  },
  galaxyS23: {
    width: 360,
    height: 780,
    name: 'Galaxy S23',
    notch: false,
  },
};

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  deviceType = 'iphone14',
  showFrame = true,
}) => {
  const device = deviceDimensions[deviceType];

  if (!showFrame) {
    return <View style={styles.noFrame}>{children}</View>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.deviceLabel}>
        <span style={styles.labelText}>{device.name}</span>
      </View>
      <View style={[styles.deviceFrame, { width: device.width + 24, height: device.height + 24 }]}>
        <View style={[styles.screen, { width: device.width, height: device.height }]}>
          {device.notch && <View style={styles.notch} />}
          <View style={styles.content}>{children}</View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  deviceLabel: {
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  labelText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  deviceFrame: {
    backgroundColor: '#1f1f1f',
    borderRadius: 40,
    padding: 12,
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  screen: {
    backgroundColor: '#fff',
    borderRadius: 32,
    overflow: 'hidden',
    position: 'relative',
  },
  notch: {
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: [{ translateX: -80 }],
    width: 160,
    height: 30,
    backgroundColor: '#1f1f1f',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  noFrame: {
    flex: 1,
    width: '100%',
  },
});
