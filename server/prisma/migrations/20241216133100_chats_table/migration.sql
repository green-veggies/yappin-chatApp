-- CreateTable
CREATE TABLE "chats" (
    "id" TEXT NOT NULL,
    "group_id" UUID NOT NULL,
    "message" TEXT,
    "name" TEXT NOT NULL,
    "file" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "chats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "chats_created_at_idx" ON "chats"("created_at");

-- AddForeignKey
ALTER TABLE "chat_groups" ADD CONSTRAINT "chat_groups_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chats" ADD CONSTRAINT "chats_group_id_fkey" FOREIGN KEY ("group_id") REFERENCES "chat_groups"("id") ON DELETE CASCADE ON UPDATE CASCADE;
