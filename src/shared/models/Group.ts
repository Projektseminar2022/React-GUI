export interface Group {
    id: string
    name: string
    creator: number
    location: {
        location: string
    }
    members: []
    topic: []
    condition: {
        temperatureInC: {
            min: number
            max: number
        }
        windInKmH: {
            min: number
            max: number
        }
        snowInCm: {
            min: number
            max: number
        }
        percipitationInMm: {
            min: number
            max: number
        }
    }
    hoursBeforeNotification: number
    lastNotificationSend: string
    message: string

}