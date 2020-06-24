class User < ApplicationRecord

    attr_reader :password

    validates :username, :email, :session_token, presence: true
    validates :username, :email, :session_token, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 6, message: "must be atleast 6 characters"}, allow_nil: true
    # validates :username, :session_token, presence: true
    # validates :username, :session_token, :email, uniqueness: { message: "is already taken" }
    # validates :email, format: { with: URI::MailTo::EMAIL_REGEXP } 

    # validate :password_complexity

    # def password_complexity
    #     # Regexp extracted from https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
    #     return if password.blank? || password =~ /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,70}$/

    #     errors.add :password, ' must contain,8-70 characters,1 uppercase letter,1 lowercase letter,1 number,1 special character'
    # end

    after_initialize :ensure_session_token
    

    # SPIRE

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end
