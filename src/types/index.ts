export type BadgeTier = "first_spark" | "rising_reader" | "steady_climber" | "deep_diver" | "club_legend";

export interface Club {
  name: string;
  founded: string;
  totalSessions: number;
  booksCompleted: number;
}

export interface CurrentBook {
  title: string;
  author: string;
  genre: string[];
  totalSessions: number;
  currentSession: number;
  coverColor: string;
  description: string;
}

export interface Member {
  id: string;
  name: string;
  joinedDate: string;
  avatarColor: string;
  attendance: {
    attended: number;
    total: number;
  };
  currentStreak: number;
  badges: BadgeTier[];
  assignedTopic?: string;
  assignedSession?: number;
}

export interface Session {
  id: string;
  number: number;
  date: string;
  presenter: string; // Member ID
  topic: string;
  takeaways: string[];
  quoteOfSession?: {
    text: string;
    author: string;
  };
  status: "completed" | "upcoming" | "in progress";
}

export interface PastBook {
  id: string;
  title: string;
  author: string;
  sessions: number;
  coverColor: string;
}

export interface ClubData {
  club: Club;
  currentBook: CurrentBook;
  pastBooks: PastBook[];
  members: Member[];
  sessions: Session[];
}
