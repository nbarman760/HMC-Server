export function changeFormat(dateStr: string) {
    var parts: any = dateStr.split("/");
    return  parts[2]+ '-'+parts[1]+'-'+parts[0];
}