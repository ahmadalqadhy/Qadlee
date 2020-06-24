# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  type       :string           not null
#  title      :string
#  body       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  author_id  :integer          not null
#
class Post < ApplicationRecord

    validates :post_type, presence: true

    belongs_to :author,
        foreign_key: :author_id,
        class_name: :User

    has_one_attached :photo

end
