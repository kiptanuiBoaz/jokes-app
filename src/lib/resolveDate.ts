import { format, parse } from "date-fns";

//date formats present in the jokes data
const dateFormats = [
    "M/dd/yyyy",
    "MM/dd/yyyy",
    "yyyy-MM-dd",
    "dd.MM.yyyy",
    "yyyy-MM-dd'T'HH:mm:ss.SSSX",
    "dd, MMM yyyy"
];

//final display format
const requiredFormat = "dd MMM yyyy";


//try all the formats for the current unfomatted date
const formatDate = (dateString:string, inputFormats:string[], outputFormat:string) => {
    for (const inputFormat of inputFormats) {
        try {
            const parsedDate = parse(dateString, inputFormat, new Date());
            return format(parsedDate, outputFormat);
        } catch (error) {
            // Ignore parse errors for this format and continue to the next one
        }
    }
    return "Invalid Date";
};


//parent function
export const dateFnsFormat = (unformattedDate:string)=> formatDate(unformattedDate,dateFormats,requiredFormat);