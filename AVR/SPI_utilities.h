//SPI config

#define FALSE	0
#define TRUE	-1

//change the pins below for your AVR
#define nSS		PB0
#define SCK		PB1
#define MOSI	PB2
#define MISO	PB3

// SPI interface initializer as Master
void SPI_Master_Init(void);

// SPI interface initializer as Slave
void SPI_SlaveInit(void);


// SPI_SendByte(unsigned char data) waits until the SPI interface is ready
// and then sends a single byte over the SPI port.  This command
// does not receive anything.
void SPI_SendByte(unsigned char data);

// SPI_TransferByte(unsigned char data) waits until the SPI interface is ready
// and then sends a single byte over the SPI port.  The function also
// returns the byte that was received during transmission.
unsigned char SPI_TransferByte(unsigned char data);

// SPI_Receive(void) waits until the SPI interface is ready
// and then returns the byte that was received during transmission
unsigned char SPI_Receive(void);