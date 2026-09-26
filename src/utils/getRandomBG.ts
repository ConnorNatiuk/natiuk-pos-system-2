export const getRandomBG = () => {
    const colors = [
        "bg-[#E57373]",
        "bg-[#F06292]",
        "bg-[#BA68C8]",
        "bg-[#9575CD]",
        "bg-[#7986CB]",
        "bg-[#64B5F6]",
        "bg-[#4FC3F7]",
        "bg-[#4DD0E1]",
        "bg-[#4DB6AC]",
        "bg-[#81C784]",
        "bg-[#AED581]",
        "bg-[#DCE775]",
        "bg-[#FFF176]",
        "bg-[#FFD54F]",
        "bg-[#FFB74D]",
        "bg-[#FF8A65]",
        "bg-[#A1887F]",
        "bg-[#90A4AE]",
        "bg-[#26A69A]",
        "bg-[#5C6BC0]",
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}