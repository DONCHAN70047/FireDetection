import serial
import serial.tools.list_ports

def find_arduino():
    ports = serial.tools.list_ports.comports()
    for port in ports:
        if "Arduino" in port.description or "CH340" in port.description:  # Adjust for your board type
            return port.device
    return None

def connectSerial():
    arduino_port = find_arduino()
    if arduino_port:
        try:
            ser = serial.Serial(arduino_port, 9600, timeout=1)
            print(f"Connected to Arduino on {arduino_port}")
            return ser
        except serial.SerialException as e:
            print(f"Connection error: {e}")
            return None
    else:
        print("Arduino not found.")
        return None

# Example Usage
ser = connectSerial()
if ser:
    ser.write(b'Hello Arduino\n')  # Example: Sending data
