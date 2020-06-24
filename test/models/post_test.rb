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
require 'test_helper'

class PostTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
