class Like < ApplicationRecord

    validates :post_id, :user_id, presence: true
    validates :post_id, uniqueness: { scope: :user_id }

    belongs_to :user,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :post,
        foreign_key: :post_id,
        class_name: :Post

end
