export class CreateReviewDto {
        readonly user: string; // userId (tham chiếu đến User)
        readonly userLog: string; // userLogId (tham chiếu đến UserLog)
        readonly rating: number; // Đánh giá của người dùng
        readonly image?: string; // Hình ảnh của đánh giá (tùy chọn)
        readonly comment?: string; // Bình luận của người dùng về hoạt động (tùy chọn)
        readonly chatSession?: string; // Tham chiếu đến phiên chat (tùy chọn)
        readonly chatMessages?: string[]; // Mảng tham chiếu đến các tin nhắn trong chat (tùy chọn)
      constructor(user: string, userLog: string, rating: number, image?: string, comment?: string, chatSession?: string, chatMessages?: string[]) {
        this.user = user;
        this.userLog = userLog;
        this.rating = rating;
        this.image = image;
        this.comment = comment;
        this.chatSession = chatSession;
        this.chatMessages = chatMessages;
      }
}
