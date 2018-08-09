import { BluetoothCommon, StopNotifyingOptions, StartNotifyingOptions, ConnectOptions, StartScanningOptions } from '../common';
export declare class Bluetooth extends BluetoothCommon {
  private _centralDelegate;
  private _centralManager;
  private _data_service;
  _peripheralArray: any;
  _connectCallbacks: {};
  _advData: {};
  _disconnectCallbacks: {};
  _onDiscovered: any;
  constructor(restoreIdentifier?: string);
  readonly enabled: boolean;
  _getState(state: CBPeripheralState): 'connecting' | 'connected' | 'disconnected';
  isBluetoothEnabled(): Promise<{}>;
  scanningReferTimer: {
    timer?: number;
    resolve?: Function;
  };
  startScanning(arg: StartScanningOptions): Promise<{}>;
  toArrayBuffer(value: any): ArrayBuffer;
  enable(): Promise<{}>;
  isGPSEnabled(): boolean;
  enableGPS(): Promise<void>;
  stopScanning(arg: any): Promise<{}>;
  connect(args: ConnectOptions): Promise<{}>;
  disconnect(arg: any): Promise<{}>;
  isConnected(arg: any): Promise<{}>;
  findPeripheral(UUID: any): CBPeripheral;
  read(arg: any): Promise<{}>;
  write(arg: any): Promise<{}>;
  writeWithoutResponse(arg: any): Promise<{}>;
  startNotifying(args: StartNotifyingOptions): Promise<{}>;
  stopNotifying(args: StopNotifyingOptions): Promise<{}>;
  private _isEnabled();
  private _stringToUuid(uuidStr);
  private _findService(UUID, peripheral);
  private _findCharacteristic(UUID, service, property);
  private _getWrapper(arg, property, reject);
  private _encodeValue(value);
  private valueToNSData(value);
}